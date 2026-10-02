# Contributing to the course

Thanks for helping improve the course materials! You can fix a typo, clarify an explanation, or suggest an exercise. You only need a free GitHub account.

## The quick way: fix something on a page

1. On the website, scroll to the bottom of the page and click **Navrhnout úpravu na GitHubu**.
2. GitHub opens the file in an editor. Make your change.
3. Click **Commit changes…** → **Propose changes**, then **Create pull request**.

Your teacher reviews the pull request. Once it's merged, the website updates by itself within a few minutes.

## How chapters are written

The study texts for **4ST102 Úvod do statistiky** are Czech Markdown files in `docs/4st102/`, one chapter per teaching week. They are converted from the lecturer's LaTeX sources.

- Each file is one subchapter. File names start with a number so they sort in reading order: `02-miry-polohy.md`.
- Start the file with the name of its chapter, then the subchapter title. Subchapters with the same `chapter:` are grouped under it in the sidebar automatically:

  ```md
  ---
  chapter: 2. Popisné statistiky
  ---

  # 2.1 Míry polohy
  ```
- Write maths in LaTeX: `$\bar{x}$` inside a sentence, or on its own lines between `$$` and `$$`.
- Hide solutions so readers try first:

  ```md
  ::: details Řešení
  Výsledek je 42.
  :::
  ```

- Highlight important ideas with `::: tip`, `::: info` or `::: warning` boxes.

Look at `docs/4st102/01-od-informace-k-datum.md` for a complete example.

## Rules for content

- **Only add material you have the right to share.** Write explanations in your own words. Don't paste pages, figures or exercises from textbooks, slides or websites unless they are under an open license that allows it — and then credit the source.
- **No personal data.** Don't put names, grades, emails or other information about real people in datasets or examples.
- Be kind in reviews and discussions.

## License of your contribution

By submitting a pull request, you agree that your contribution is licensed under this project's licenses: **CC BY-SA 4.0** for course content (see `LICENSE-CONTENT`) and the **MIT License** for code (see `LICENSE`). You'll be credited through the project's GitHub history.

## Working in VS Code (optional)

For bigger contributions, you can work on your own computer and preview the site before you send it. You need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) LTS.

1. On GitHub, click **Fork** to make your own copy of this repository.
2. In VS Code, press **Ctrl+Shift+P** and run **Git: Clone**. Pick your fork and open it. When VS Code offers the recommended extensions, click **Install**.
3. Open a new terminal (**Terminal → New Terminal**) and run `npm install`, then `npm run dev`. Ctrl+Click the `localhost` link to see the site. It updates as you save.
4. In **Source Control** (**Ctrl+Shift+G**), click **…** → **Branch → Create Branch**, and give it a name such as `oprava-kapitoly-1`.
5. Make your changes, write a commit message, click **Commit**, then **Publish Branch**.
6. In the **GitHub Pull Requests** panel, click **Create Pull Request**.
