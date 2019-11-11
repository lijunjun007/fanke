// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'
//引入并挂载elemenUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
//创建header全局组件
import header from "./components/header.vue"
Vue.component("allHeader",header)
//创建souBar全局组件
import soubar from "./components/souBar.vue"
Vue.component("allBar",soubar)
//创建footer全局组件
import footer from "./components/footer.vue"
Vue.component("allFooter",footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
