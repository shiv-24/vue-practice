import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/styles/global.css';
import { createStore } from './store'
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const store = createStore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
