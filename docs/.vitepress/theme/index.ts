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
    
	onMounted(() => {
		console.log('Vue mounted.')
		console.log('GPG.ts 加载成功');
		GPGModule.initGPG();
		if (typeof document !=  'undefined'){
			import('./layout/naranja.js');
			import('./layout/popup.js');
			import('./layout/Switch');
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
