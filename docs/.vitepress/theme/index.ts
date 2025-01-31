import DefaultTheme from 'vitepress/theme'
import Layout from './layout/Layout.vue' 
import "./custom.css" 

export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    //app.component('confetti', confetti)
  },
}