import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from './assets/plugin/axios';
import store from './store';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Axios);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
