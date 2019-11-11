import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../components/index.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'
import productDetail from '../components/product_detail.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/',name: 'index0',component: index},
    {path: '/index',name: 'index1',component: index},
    {path: '/reg',name: 'register',component: register},
    {path: '/login',name: 'login',component: login},
    {path: '/product',name: 'product_detail',component: productDetail}
  ]
})
