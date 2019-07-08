
import Vue from 'vue'

import Vuex,{Store} from 'vuex'


//
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//声明使用vue插件
Vue.use(Vuex)

export default new Store({
    state, //数据状态
    mutations, //直接修改数据状态
    actions,   //间接修改数据状态
    getters   //是store中的计算属性
})