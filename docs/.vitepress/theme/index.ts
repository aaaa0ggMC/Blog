import DefaultTheme from 'vitepress/theme-without-fonts';
import Layout from './layout/Layout.vue';
import { useRoute } from 'vitepress';
import { watch } from 'vue';

// 引入需要的外部资源
// import './layout/GPG';  // 确保 GPG.ts 会被加载
import './custom.css';
if (typeof document !=  'undefined'){
	import('./layout/popup.js');
	import('./layout/Switch');
}

export default {
  Layout,
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    
    watch(
      () => route.path,
      () => {
        console.log("Route changed");
        import('./layout/GPG')
          .then((GPGModule) => {
            console.log('GPG.ts 加载成功');
            GPGModule.initGPG();
          })
          .catch((error) => {
            console.error('加载 GPG.ts 时出错:', error);
          });
      }
    );
  },
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      import('./layout/GPG')
        .then((GPGModule) => {
          console.log('GPG.ts 加载成功');
          GPGModule.initGPG();
        })
        .catch((error) => {
          console.error('加载 GPG.ts 时出错:', error);
        });
    }
  }
};
