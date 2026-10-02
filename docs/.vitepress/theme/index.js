// Your own theme starts here. It extends VitePress's default theme, so you
// only override what you want. Register custom Vue components below and use
// them directly in any Markdown page, e.g. <NormalDistribution />.
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('NormalDistribution', NormalDistribution)
  }
}
