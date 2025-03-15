import DefaultTheme from 'vitepress/theme-without-fonts';
import Layout from './layout/Layout.vue';
import { useRoute } from 'vitepress';
import { watch, onMounted } from 'vue';
import * as GPGModule from './layout/GPG';
// 引入需要的外部资源
// import './layout/GPG';  // 确保 GPG.ts 会被加载
import './custom.css';

export default {
  Layout,
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    
	onMounted(async () => {
		console.log('Vue mounted.');
    if (typeof document !=  'undefined'){
      await import('./layout/naranja.js');
      await import('./layout/popup.js');
      await import('./layout/Switch');
    }
		console.log('GPG.ts 加载成功');
		GPGModule.initGPG();// Detect if in-browser to avoid errors in GitHub Actions
		if (typeof window !== 'undefined') {
			console.log('Running in browser');
		} else {
			console.log('Not in browser (GitHub Actions or other environments)');
		}
    });
	
    watch(
      () => route.path,
      () => {
        console.log("Route changed");
		    console.log('GPG.ts 加载成功');
		    GPGModule.initGPG();
      }
    );
  },
  enhanceApp({ app }) {
  
  }
};
