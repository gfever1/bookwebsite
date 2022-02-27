import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from './store'
//import http from 'axios'
import axios from "axios";

Vue.use(ElementUI);
//Vue.prototype.$http = http
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  axios,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
