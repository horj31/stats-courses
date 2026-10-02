"""Turn every notebook in notebooks/ into a page of the website.

Runs automatically before `npm run dev` and `npm run build`, and in the
GitHub Actions deploy. It never executes code: pages show whatever outputs
were saved in the notebook, so run all cells before committing.

    notebooks/01-foo.ipynb  ->  docs/python/01-foo.md   (+ images in 01-foo_files/)
                            ->  docs/public/notebooks/01-foo.ipynb  (download link)
"""

from __future__ import annotations

import os
import re
import shutil
import subprocess
from pathlib import Path

import nbformat
from nbconvert import MarkdownExporter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "notebooks"
OUT = ROOT / "docs" / "python"
DOWNLOADS = ROOT / "docs" / "public" / "notebooks"

ANSI = re.compile(r"\x1b\[[0-9;]*[A-Za-z]")
STYLE_BLOCK = re.compile(r"<style[^>]*>.*?</style>", re.DOTALL | re.IGNORECASE)
H1 = re.compile(r"^#\s+(.+)$", re.MULTILINE)


def github_repo() -> tuple[str, str] | None:
    """Return (owner/repo, branch) from GitHub Actions or the local git remote."""
    repo = os.environ.get("GITHUB_REPOSITORY")
    branch = os.environ.get("GITHUB_REF_NAME") or "main"
    if repo:
        return repo, branch
    try:
        url = subprocess.run(
            ["git", "remote", "get-url", "origin"],
            capture_output=True, text=True, check=True, cwd=ROOT,
        ).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        return None
    match = re.search(r"github\.com[:/](.+?/.+?)(?:\.git)?$", url)
    return (match.group(1), branch) if match else None


def actions_html(stem: str, repo: tuple[str, str] | None) -> str:
    links = []
    if repo:
        slug, branch = repo
        colab = f"https://colab.research.google.com/github/{slug}/blob/{branch}/notebooks/{stem}.ipynb"
        links.append(
            f'<a class="nb-btn nb-btn-primary" href="{colab}" target="_blank" rel="noopener">'
            "▶ Open in Colab</a>"
        )
    links.append(
        f'<a class="nb-btn" :href="withBase(\'/notebooks/{stem}.ipynb\')" download>'
        "⬇ Download .ipynb</a>"
    )
    return '<div class="notebook-actions">\n' + "\n".join(links) + "\n</div>"


def suggest_link(repo_path: str, repo: tuple[str, str] | None) -> str:
    """Footer link to the source on GitHub (replaces VitePress's edit link)."""
    if not repo:
        return ""
    slug, branch = repo
    kind = "tree" if not repo_path.endswith(".ipynb") else "blob"
    return (
        "---\n\n"
        f"[Improve this notebook on GitHub](https://github.com/{slug}/{kind}/{branch}/{repo_path}) · "
        f"[How to contribute](https://github.com/{slug}/blob/{branch}/CONTRIBUTING.md)"
    )


def convert(path: Path, exporter: MarkdownExporter, repo) -> tuple[str, str]:
    stem = path.stem
    nb = nbformat.read(path, as_version=4)
    body, resources = exporter.from_notebook_node(
        nb, resources={"output_files_dir": f"{stem}_files"}
    )

    body = ANSI.sub("", body)           # colour codes from tracebacks
    body = STYLE_BLOCK.sub("", body)    # pandas' inline <style> breaks Vue

    # The title is the first "# Heading" in a Markdown cell (not a code comment).
    first_h1 = next(
        (m.group(0) for c in nb.cells if c.cell_type == "markdown" for m in [H1.search(c.source)] if m),
        None,
    )
    pos = body.find(first_h1) if first_h1 else -1

    # Title first, then the Colab / download buttons, then the notebook itself.
    if pos >= 0:
        heading, rest = first_h1, body[:pos] + body[pos + len(first_h1):]
    else:
        heading, rest = f"# {stem}", body
    title = heading.lstrip("#").strip()

    page = "\n\n".join([
        f'---\ntitle: "{title.replace(chr(34), "")}"\neditLink: false\n---',
        "<script setup>\nimport { withBase } from 'vitepress'\n</script>",
        f"<!-- Generated from notebooks/{path.name}. Edit the notebook, not this file. -->",
        heading.strip(),
        actions_html(stem, repo),
        # ::: v-pre stops Vue from reading {{ }} in code output as template syntax.
        "::: v-pre",
        rest.strip(),
        ":::",
        suggest_link(f"notebooks/{path.name}", repo),
    ]) + "\n"

    (OUT / f"{stem}.md").write_text(page, encoding="utf-8")
    for name, data in resources.get("outputs", {}).items():
        target = OUT / name
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
    shutil.copy2(path, DOWNLOADS / path.name)
    return stem, title


def write_index(pages: list[tuple[str, str]], repo) -> None:
    lines = [
        "---\neditLink: false\n---",
        "",
        "# Python notebooks",
        "",
        "Each notebook opens in **Google Colab** with one click, so you can run and change the code "
        "in your browser without installing anything. You can also download the `.ipynb` file "
        "and open it in Jupyter or VS Code.",
        "",
    ]
    if pages:
        lines += [f"{i}. [{title}](./{stem})" for i, (stem, title) in enumerate(pages, 1)]
    else:
        lines.append("_No notebooks yet. Add one to the `notebooks/` folder._")
    lines += ["", suggest_link("notebooks", repo).replace("Improve this notebook", "All notebooks")]
    (OUT / "index.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    shutil.rmtree(OUT, ignore_errors=True)
    shutil.rmtree(DOWNLOADS, ignore_errors=True)
    OUT.mkdir(parents=True)
    DOWNLOADS.mkdir(parents=True)

    exporter = MarkdownExporter()
    repo = github_repo()
    notebooks = sorted(p for p in SRC.glob("*.ipynb") if not p.name.startswith("."))
    pages = [convert(nb, exporter, repo) for nb in notebooks]
    write_index(pages, repo)

    print(f"Converted {len(pages)} notebook(s) into docs/python/")
    if not repo:
        print("  (No GitHub remote found yet, so pages have no 'Open in Colab' button locally.)")


if __name__ == "__main__":
    main()
