// Your own theme starts here. It extends VitePress's default theme, so you
// only override what you want. Register custom Vue components below and use
// them directly in any Markdown page, e.g. <NormalDistribution />.
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// Shown at the bottom of every page. The site footer can't carry it: VitePress
// hides the footer on pages with a sidebar.
const PAGE_NOTE = `
  <p>© ${new Date().getFullYear()} Jaroslav Horníček · Studijní texty jsou šířeny pod licencí
  <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.cs" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>.</p>
  <p>Web byl vytvořen s pomocí Claude AI. Studijní texty jsou autorské, AI pomohla pouze s jejich převodem z LaTeXu do webové podoby.</p>
`

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h('div', { class: 'page-note', innerHTML: PAGE_NOTE })
    })
  },
  enhanceApp({ app }) {
    // app.component('NormalDistribution', NormalDistribution)
  }
}
