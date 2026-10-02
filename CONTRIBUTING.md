# Contributing to the course

Thanks for helping improve the course! You can fix a typo, improve an explanation, add an exercise, or add a whole new chapter or notebook. You only need a free GitHub account.

## The quick way: fix something on a page

1. On the website, scroll to the bottom of the page and click **Suggest a change on GitHub**.
2. GitHub opens the file in an editor. Make your change.
3. Click **Commit changes…** → **Propose changes**, then **Create pull request**.

Your teacher reviews the pull request. Once it's merged, the website updates by itself within a few minutes.

## Adding a statistics chapter

Chapters are Markdown files in `docs/statistics/`.

- Name the file with a number so it sorts in the right place: `02-probability-basics.md`.
- Start the file with a title line: `# 2. Probability basics`. That title appears in the sidebar automatically.
- Write maths in LaTeX: `$\bar{x}$` inside a sentence, or on its own lines between `$$` and `$$`.
- Hide solutions so readers try first:

  ```md
  ::: details Solution
  The answer is 42.
  :::
  ```

- Highlight important ideas with `::: tip`, `::: info` or `::: warning` boxes.

Look at `docs/statistics/01-descriptive-statistics.md` for a complete example.

## 4ST102 Úvod do statistiky (Czech)

The course **4ST102 Úvod do statistiky** has its own study texts in Czech in `docs/4st102/`, one chapter per teaching week. They follow the same conventions as the statistics chapters above: numbered file names (`02-popisne-statistiky.md`), a first line `# 2. Title`, and LaTeX maths. The chapters are converted from the lecturer's LaTeX sources; fixes to existing chapters are welcome through **Suggest a change on GitHub**.

## Adding a Python notebook

Notebooks live in `notebooks/` and become web pages automatically.

- Name it with a number: `02-probability-simulations.ipynb`.
- Make the **first cell** a Markdown cell starting with a title: `# Probability simulations`.
- **Run all cells before you save** (*Run → Run All*). The website shows the outputs saved in the file; it doesn't run your code.
- Keep it light: datasets under a few MB, and only libraries that Google Colab already has (NumPy, pandas, matplotlib, SciPy, seaborn, statsmodels, scikit-learn).
- Working in Colab? Download your notebook (*File → Download → Download .ipynb*), then in this repository open the `notebooks/` folder and use **Add file → Upload files**. GitHub turns the upload into a pull request for you.

## Rules for content

- **Only add material you have the right to share.** Write explanations in your own words. Don't paste pages, figures or exercises from textbooks, slides or websites unless they are under an open license that allows it — and then credit the source.
- **No personal data.** Don't put names, grades, emails or other information about real people in datasets or examples.
- Be kind in reviews and discussions.

## License of your contribution

By submitting a pull request, you agree that your contribution is licensed under this project's licenses: **CC BY-SA 4.0** for course content (see `LICENSE-CONTENT`) and the **MIT License** for code (see `LICENSE`). You'll be credited through the project's GitHub history.

## Working in VS Code (optional)

For bigger contributions, you can work on your own computer and preview the site before you send it. You need [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/) LTS and Python 3.10+.

1. On GitHub, click **Fork** to make your own copy of this repository.
2. In VS Code, press **Ctrl+Shift+P** and run **Git: Clone**. Pick your fork and open it. When VS Code offers the recommended extensions, click **Install**.
3. Run **Python: Create Environment → Venv**, and tick `requirements.txt`.
4. Open a new terminal (**Terminal → New Terminal**) and run `npm install`, then `npm run dev`. Ctrl+Click the `localhost` link to see the site. It updates as you save.
5. In **Source Control** (**Ctrl+Shift+G**), click **…** → **Branch → Create Branch**, and give it a name such as `chapter-2-probability`.
6. Make your changes, write a commit message, click **Commit**, then **Publish Branch**.
7. In the **GitHub Pull Requests** panel, click **Create Pull Request**.
