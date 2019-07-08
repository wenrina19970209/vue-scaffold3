/* 
包含N个接口请求函数，
每个函数返回的都是promse
*/

import ajax from '../api/ajax'

const BASE = '/api'

//根据经纬度获取位置详情
export const reAddress = (longitude,latitude) => ajax.get(BASE +`/position/${longitude},${latitude}`)


//获取食品分类列表
export const reCategorys = () => ajax({
    method:'GET',
    url:BASE+'/index_category'
})


//根据经纬度获取商铺列表
export const reShops = ({longitude,latitude}) => ajax({
    method:'GET',
    url:BASE+'/shops',
    params:{longitude,latitude}
})
