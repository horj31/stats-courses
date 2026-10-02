# Teaching materials — Jaroslav Horníček

Course website for statistics courses at VŠE v Praze, built with [VitePress](https://vitepress.dev/) and published free on GitHub Pages:
https://horj31.github.io/stats-courses/

## How it fits together

```
docs/
  index.md                 Home page: list of courses
  4st102/                  4ST102 Úvod do statistiky: one Markdown file per weekly chapter
  .vitepress/config.mjs    Site title, navigation, sidebar (built automatically), Czech labels
  .vitepress/theme/        Colours and CSS
.github/workflows/deploy.yml   Builds and publishes the site on every push to main
.vscode/extensions.json        Extensions VS Code offers to install
```

Shortcuts below are for Windows and Linux. On a Mac, use **Cmd** instead of **Ctrl**.

## Add a weekly chapter

1. Create `docs/4st102/02-<short-name>.md`. The number at the start keeps the chapters in order.
2. Make the first line the chapter title, for example `# 2. Popisné statistiky`. The sidebar picks it up automatically.
3. Commit and push to `main`. The site updates about two minutes later.

## Add another course

1. Create a folder such as `docs/4st201/` with an `index.md` landing page and numbered chapters.
2. In `docs/.vitepress/config.mjs`, add a nav item `{ text: '4ST201', link: '/4st201/' }` and a sidebar entry `'/4st201/': sidebarFor('4st201', '4ST201 Course name')`.
3. Add the course to the list in `docs/index.md`.

## Everyday work

**Start with the latest version.** In Source Control (**Ctrl+Shift+G**), click **Sync Changes**. This pulls in student fixes you merged on GitHub.

**Publish your changes.** In Source Control:

1. Type a short message, for example *Add chapter 2*.
2. Click **Commit**. Answer **Yes** if VS Code asks to stage all changes.
3. Click **Sync Changes**.

The site updates about two minutes later. You can watch the build in the GitHub Actions panel in the sidebar.

**Review student pull requests.**

1. Open the **GitHub Pull Requests** panel in the sidebar and pick a pull request.
2. Check that the build check is green, read the changes, and leave comments.
3. Merge it, either in VS Code or on GitHub.

## Preview the site locally (optional)

Install [Node.js](https://nodejs.org/) (the **LTS** version) and restart VS Code. Then open a terminal (**Terminal → New Terminal**) and run:

```bash
npm install
npm run dev
```

**Ctrl+Click** the `http://localhost:5173/` link to open the site. Changes appear as soon as you save.

## Connect a custom domain (optional)

1. At your domain registrar, add a **CNAME** record, for example name `learn` with value `horj31.github.io`.
2. In the repository, go to **Settings → Pages → Custom domain**. Enter the domain and save.
3. Once the DNS check passes, tick **Enforce HTTPS**.
4. Go to **Actions → Build and deploy site → Run workflow** once, so the site rebuilds for the new address.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The site loads without styling, or shows 404 errors, after you set a domain | Run the workflow once more (custom domain, step 4). |
| A push or pull request shows a red ✗ | Click **Details** to see which page failed to build. A link to a page that doesn't exist is the most common cause. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

- **Code** (site configuration, theme, workflows): [MIT](LICENSE)
- **Course content** (`docs/`, datasets and images): [CC BY-SA 4.0](LICENSE-CONTENT)
