import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// ---------------------------------------------------------------------------
// Site settings — change these first
// ---------------------------------------------------------------------------
const SITE_TITLE = 'Jaroslav Horníček'
const SITE_DESCRIPTION = 'Studijní materiály ke kurzům statistiky.'

// In GitHub Actions this is filled in automatically ("owner/repo").
const REPO = process.env.GITHUB_REPOSITORY || ''
const BRANCH = process.env.GITHUB_REF_NAME || 'main'

// The deploy workflow sets BASE_PATH: '' with a custom domain, '/repo' without one.
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '') + '/'

// ---------------------------------------------------------------------------
// Sidebar: built automatically from the files in a folder, sorted by file
// name (01-..., 02-...). The title is the page's frontmatter `title:` or its
// first "# Heading". Consecutive pages with the same frontmatter `chapter:`
// are grouped under that chapter heading. Students never have to edit this
// file to add a page.
// ---------------------------------------------------------------------------
const DOCS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function readPage(file) {
  const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  let frontmatter = ''
  let body = text
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---', 4)
    if (end > 0) {
      frontmatter = text.slice(4, end)
      body = text.slice(end + 4)
    }
  }
  const field = (key) => frontmatter.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'))?.[1]
  const h1 = body.match(/^#\s+(.+)$/m)
  return {
    title: field('title') || (h1 ? h1[1].trim() : path.basename(file, '.md')),
    chapter: field('chapter')
  }
}

function sidebarFor(folder, label) {
  const dir = path.join(DOCS, folder)
  if (!fs.existsSync(dir)) return []
  const items = []
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .sort()
  for (const f of files) {
    const { title, chapter } = readPage(path.join(dir, f))
    const page = { text: title, link: `/${folder}/${f.replace(/\.md$/, '')}` }
    const last = items[items.length - 1]
    if (!chapter) items.push(page)
    else if (last?.items && last.text === chapter) last.items.push(page)
    else items.push({ text: chapter, collapsed: false, items: [page] })
  }
  return [{ text: label, link: `/${folder}/`, items }]
}

export default defineConfig({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  lang: 'cs',
  base: BASE,
  cleanUrls: true,

  markdown: {
    math: true // LaTeX: $x^2$ inline, $$...$$ for display
  },

  themeConfig: {
    nav: [{ text: '4ST102', link: '/4st102/' }],

    sidebar: {
      '/4st102/': sidebarFor('4st102', '4ST102 Úvod do statistiky')
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Hledat', buttonAriaLabel: 'Hledat' },
          modal: {
            displayDetails: 'Zobrazit podrobnosti',
            resetButtonTitle: 'Smazat hledání',
            backButtonTitle: 'Zavřít hledání',
            noResultsText: 'Žádné výsledky pro',
            footer: {
              selectText: 'otevřít',
              selectKeyAriaLabel: 'Enter',
              navigateText: 'pohyb',
              navigateUpKeyAriaLabel: 'šipka nahoru',
              navigateDownKeyAriaLabel: 'šipka dolů',
              closeText: 'zavřít',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },

    outline: { level: [2, 3], label: 'Na této stránce' },
    docFooter: { prev: 'Předchozí', next: 'Další' },
    sidebarMenuLabel: 'Nabídka',
    returnToTopLabel: 'Zpět nahoru',
    darkModeSwitchLabel: 'Vzhled',
    lightModeSwitchTitle: 'Přepnout na světlý režim',
    darkModeSwitchTitle: 'Přepnout na tmavý režim',
    skipToContentLabel: 'Přejít na obsah',
    notFound: {
      title: 'STRÁNKA NENALEZENA',
      quote: 'Tato stránka neexistuje nebo byla přesunuta.',
      linkLabel: 'přejít na úvodní stránku',
      linkText: 'Zpět na úvod'
    },

    ...(REPO && {
      socialLinks: [{ icon: 'github', link: `https://github.com/${REPO}` }],
      editLink: {
        text: 'Navrhnout úpravu na GitHubu',
        pattern: `https://github.com/${REPO}/edit/${BRANCH}/docs/:path`
      }
    })
  }
})
