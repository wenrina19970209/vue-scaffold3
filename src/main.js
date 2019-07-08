
/* 
入口文件.js
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'

// import ajax from './api/ajax'
import store from './vuex/store'

// Vue.prototype.$ajax = ajax


// 全局注册组件
Vue.component('Header',Header)
Vue.component('Star',Star)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  render:h => h(App),
  router, //配置路由
  store   //配置vuex
})
