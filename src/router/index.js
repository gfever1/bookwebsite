import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import Regist from "@/views/Regist";
import BookShelf from "@/views/BookShelf";
import Upload from "@/views/Upload"
//全局使用
Vue.use(VueRouter)
//配置路由
const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/BookShelf',
    name: 'BookShelf',
    component: BookShelf
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: Upload
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导出
export default router
