import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './layout/Layout.vue'

// 引入需要的外部资源
import "./layout/GPG"  // 这里确保 GPG.ts 会被加载
import "./custom.css"

export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 动态加载 GPG.ts 并初始化 GPG 解密逻辑
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        import('./layout/GPG').then((GPGModule) => {
          console.log('GPG.ts 加载成功');
          GPGModule.initGPG();
        }).catch((error) => {
          console.error('加载 GPG.ts 时出错:', error);
        });
      });
    } else {
      import('./layout/GPG').then((GPGModule) => {
        console.log('GPG.ts 加载成功');
        GPGModule.initGPG();
      }).catch((error) => {
        console.error('加载 GPG.ts 时出错:', error);
      });
    }
  },
}
