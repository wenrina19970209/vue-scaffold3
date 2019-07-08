/* 
actions: 包含n个用于间接修改状态数据的方法的对象
*/
import {
    reAddress, //根据经纬度获取位置详情
    reCategorys,  //获取食品分类列表
    reShops //根据经纬度获取商铺列表

} from '../api'

import {//mutations的type类型(也就是函数名)
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutations-type'

export default {

    /*
      获取分类列表的异步action 
     */

    /* 根据经纬度获取位置详情 */
    async getAddress({commit,state}){
        //发送异步请求
        const {latitude,longitude} = state
        console.log(longitude)

        const result = await reAddress(latitude,longitude)

        //请求成功将数据，提交到mutation中
        if(result.code === 0){//请求成功
            const address = result.data
            commit(RECEIVE_ADDRESS,address)  //参数1，mutations的type类型
        }
    },

     /* 获取食品分类列表 */
    async getCategorys({commit},callback){
        //发送异步请求
        const result = await reCategorys()

        //请求成功将数据，提交到mutation中
        if(result.code === 0){//请求成功
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,categorys)  //参数1，mutations的type类型

            //在数据更新之后调用函数
            typeof callback === 'function' && callback() // 发通知
        }
    },

    /* 根据经纬度获取商铺列表 */
    async getShops({commit,state}){
        //发送异步请求
        const {latitude,longitude} = state
        const result = await reShops(longitude,latitude)
        //请求成功将数据，提交到mutation中
        if(result.code === 0){//请求成功
            const shops = result.data
            commit(RECEIVE_SHOPS,shops)  //参数1，mutations的type类型
        }
    }


}