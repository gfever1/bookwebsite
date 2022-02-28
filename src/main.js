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
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=FormBoundary';
/*var instance = axios.create({
  baseURL:'http://bookwebsite.gz2vip.91tunnel.com/bookwebsite_war_exploded/',
  timeout:1000,
  headers:{'Content-Type': 'multipart/form-data;charset=UTF-8'}
})*/
Vue.config.productionTip = false
// Vue.prototype.instance=instance

new Vue({
  router,
  axios,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
