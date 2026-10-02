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
// first "# Heading". Students never have to edit this file to add a page.
// ---------------------------------------------------------------------------
const DOCS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function pageTitle(file) {
  const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n')
  let body = text
  if (text.startsWith('---\n')) {
    const end = text.indexOf('\n---', 4)
    const frontmatter = end > 0 ? text.slice(4, end) : ''
    const title = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/m)
    if (title) return title[1]
    body = end > 0 ? text.slice(end + 4) : text
  }
  const h1 = body.match(/^#\s+(.+)$/m)
  return h1 ? h1[1].trim() : path.basename(file, '.md')
}

function sidebarFor(folder, label) {
  const dir = path.join(DOCS, folder)
  if (!fs.existsSync(dir)) return []
  const items = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .sort()
    .map((f) => ({
      text: pageTitle(path.join(dir, f)),
      link: `/${folder}/${f.replace(/\.md$/, '')}`
    }))
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
    }),

    footer: {
      message: 'Studijní texty jsou šířeny pod licencí CC BY-SA 4.0.',
      copyright: `© ${new Date().getFullYear()} Jaroslav Horníček`
    }
  }
})
