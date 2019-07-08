/* 
所有应用中的路由
*/

import Msite from '../pages/Msite/Msite.vue'  //首页组件vue
import Order from '../pages/Order/Order.vue'  //订单组件vue
import Search from '../pages/Search/Search.vue' //搜索组件vue
import Profile from '../pages/Profile/Profile.vue' //个人组件vue
import Login from '../pages/Login/Login.vue' //登录组件vue

export default [
    {
        path:'/msite',
        component:Msite,
        meta:{isFooterGuide:true}
    },
    {
        path:'/order',
        component:Order,
        meta:{isFooterGuide:true}
    },
    {
        path:'/search',
        component:Search,
        meta:{isFooterGuide:true}
    },
    {
        path:'/profile',
        component:Profile,
        meta:{isFooterGuide:true}
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',  //项目的根路由
        redirect:'/msite'
    }
    
]