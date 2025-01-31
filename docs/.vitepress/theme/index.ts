import DefaultTheme from 'vitepress/theme-without-fonts';
import './custom.css';
import LayoutIndex from './layout/Index.vue'
import type { Theme } from 'vitepress'

import 'gitalk/dist/gitalk.css'

const theme: Theme = {  
  ...DefaultTheme,
  Layout: LayoutIndex
}

export default theme;
