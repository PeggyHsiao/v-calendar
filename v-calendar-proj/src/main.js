import Vue from 'vue';
import router from '@/router/index';
import Calendar from 'v-calendar';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Calendar);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
