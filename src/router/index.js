/* 
路由器模块
*/
//引入vue
import Vue from 'vue'

//引入路由插件
import VueRouter from 'vue-router'

//引入路由链接文件
import routes from './routes.js'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    //配置应用中的所有的路由
    routes
})