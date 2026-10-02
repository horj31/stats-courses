# Statistics & Python — course website

An open course book for statistics and runnable Python notebooks, built with [VitePress](https://vitepress.dev/) and published free on GitHub Pages. Students contribute through pull requests.

## How it fits together

```
docs/
  index.md                 Home page
  statistics/              Statistics e-book: one Markdown file per chapter
  .vitepress/config.mjs    Site title, navigation, sidebar (built automatically)
  .vitepress/theme/        Your design: colours, CSS, custom Vue components
notebooks/                 Python notebooks (.ipynb), the source of the Python pages
scripts/convert_notebooks.py   Turns notebooks into pages (runs automatically)
.github/workflows/deploy.yml   Builds and publishes the site on every push to main
.vscode/extensions.json        Extensions VS Code offers to install
```

`docs/python/` is generated from `notebooks/` at build time and is not committed.

Shortcuts below are for Windows and Linux. On a Mac, use **Cmd** instead of **Ctrl**.

---

## Set up VS Code (once)

### 1. Install the tools

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/), the **LTS** version
- [Python](https://www.python.org/downloads/) 3.10 or newer. On Windows, tick **"Add python.exe to PATH"** in the installer.

Restart VS Code after installing, so it finds them.

### 2. Open the project

Unzip the project, then in VS Code use **File → Open Folder…** and pick the `stats-python-course` folder.

VS Code asks whether to install the **recommended extensions**. Click **Install**. You get:

| Extension | What it's for |
| --- | --- |
| Python, Jupyter | Edit and run notebooks inside VS Code |
| Vue - Official | Help when you edit the theme and Vue components |
| GitHub Pull Requests | Review and merge student contributions |
| GitHub Actions | Watch the site build and deploy |

### 3. Create the Python environment

1. Press **Ctrl+Shift+P** and run **Python: Create Environment**.
2. Choose **Venv**, then your Python version.
3. Tick **requirements.txt** and press OK.

VS Code creates a `.venv` folder and installs everything. It takes a minute or two.

### 4. Preview the site

Open a new terminal with **Terminal → New Terminal**. It must be a new one, so that it uses the environment you just created. Then run:

```bash
npm install
npm run dev
```

**Ctrl+Click** the `http://localhost:5173/` link in the terminal to open the site.

- Chapter changes appear as soon as you save.
- Notebook changes need a restart: press **Ctrl+C** in the terminal, then run `npm run dev` again.

---

## Publish to GitHub Pages (once)

### 5. Publish the repository

1. Open **Source Control** with **Ctrl+Shift+G**.
2. Click **Publish to GitHub**, then choose **Publish to GitHub public repository**. Keep all files ticked.
3. Sign in to GitHub in the browser window that opens.

VS Code creates the repository on GitHub and uploads everything.

The first **Build and deploy site** run on GitHub fails. That's expected, because GitHub Pages isn't switched on yet.

> If VS Code says to configure `user.name` and `user.email`, run this in the terminal, then try again:
> ```bash
> git config --global user.name "Your Name"
> git config --global user.email "you@example.com"
> ```
> To keep your address private, use the `@users.noreply.github.com` address from GitHub → Settings → Emails.

### 6. Turn on GitHub Pages

1. On GitHub, in your repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
2. Go to the **Actions** tab, then **Build and deploy site → Run workflow**.

After a minute or two, the site is live at `https://YOUR-USERNAME.github.io/stats-python-course/`.

### 7. Connect your domain

1. At your domain registrar, add a **CNAME** record with name `learn` and value `YOUR-USERNAME.github.io`.
2. In the repository, go to **Settings → Pages → Custom domain**. Enter `learn.yourdomain.com` and save.
3. Once the DNS check passes, tick **Enforce HTTPS**.
4. Go to **Actions → Build and deploy site → Run workflow** once, so the site rebuilds for the new address.
5. In your **account** settings, under **Settings → Pages → Add a domain**, verify the domain. This stops anyone else from using it on GitHub.

---

## Everyday work

**Start with the latest version.** In Source Control, click **Sync Changes**. This pulls in student work you merged on GitHub.

**Publish your changes.** In Source Control:

1. Type a short message, for example *Add chapter 2*.
2. Click **Commit**. Answer **Yes** if VS Code asks to stage all changes.
3. Click **Sync Changes**.

The site updates about two minutes later. You can watch the build in the GitHub Actions panel in the sidebar.

**Work on a notebook.**

1. Open the `.ipynb` file in `notebooks/`.
2. Click **Select Kernel** in the top right, then **Python Environments → .venv**.
3. Edit, use **Run All**, and save. The website shows the outputs that are saved in the file.

**Review student pull requests.**

1. Open the **GitHub Pull Requests** panel in the sidebar and pick a pull request.
2. Check that the build check is green, read the changes, and leave comments.
3. To see the change on the site, click **Checkout** and run `npm run dev`.
4. Merge it, either in VS Code or on GitHub.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `python: command not found` or `No module named nbconvert` when running `npm run dev` | Open a **new** terminal, so it activates `.venv`. If that doesn't help, run **Python: Select Interpreter** and pick `.venv`. |
| The site loads without styling, or shows 404 errors, after you set the domain | Run the workflow once more (step 7, part 4). |
| A pull request shows a red ✗ | Click **Details** to see which page or notebook failed to build. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

- **Code** (site configuration, theme, scripts, workflows): [MIT](LICENSE)
- **Course content** (`docs/statistics/`, `notebooks/`, datasets and lesson images): [CC BY-SA 4.0](LICENSE-CONTENT)
