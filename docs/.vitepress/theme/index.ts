import DefaultTheme from 'vitepress/theme-without-fonts';
import Layout from './layout/Layout.vue';
import { useRoute , useRouter} from 'vitepress';
import { watch, onMounted } from 'vue';
//privacy
import * as Decryptor from '../scripts/Decryptor';
//replacers
import ec from './layout/replacers/ec.vue';
import ecp from './layout/replacers/ecp.vue';
import np from './layout/replacers/np.vue';
import tc from './layout/replacers/tc.vue';
//css
import './custom.css';

export default {
  Layout,
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const router = useRouter();
    
	  onMounted(async () => {
		console.log('Vue mounted.');
        if (typeof document !=  'undefined'){
          await import('./layout/naranja.js');
          await import('./layout/popup.js');
          await import('./layout/Switch');
        }
        console.log('Decrypting...');
        Decryptor.tryDecrypt();
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
        console.log('Decrypting...');
        Decryptor.tryDecrypt();
      }
    );
  },
  enhanceApp({ app }) {
    app.component('ec',ec);
    app.component('np',np);
    app.component('ecp',ecp);
    app.component('tc',tc);
  }
};
