import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import Regist from "@/views/Regist";
import Admin from "@/views/Admin";


// import Test from "@/views/Test";
//全局使用
Vue.use(VueRouter)
//配置路由
const routes = [
 /* {
    path: '/Test',
    name: 'Test',
    component: Test
  },*/
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导出
export default router
