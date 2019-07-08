/* 
一个能发送ajax请求的函数，使用axios发送请求，返回Promise对象
1.统一处理请求异常
2.异步请求的数据不是response，而是response.data
3.对于post请求数据进行ulencode处理，不能使用json方式，（服务器不支持）
    urlencode是一个函数,可将字符串以URL编码,用于编码处理。
4.配置请求超时的时间
*/

import axios from 'axios'

//对数据进行编码，将query数据转换为string
import qs from 'qs'



//请求超时的全局配置
axios.defaults.timeout = 20000 //请求超时，20s


//添加请求拦截器
axios.interceptors.request.use((config) =>{  //config内是一些请求配置 

    const { method , data } = config
    //判断请求方式是否是post,判断data有没有数据, 判断data数据类型是不是object
    //如果携带的是post请求参数，需要做处理
    if(method.toLowerCase() === 'post' && data && typeof data === 'object'){
        config.data = qs.stringify(data) //{name:'哈哈',pwd:'123'} 转换为 name=哈哈&pwd=123
    }
    return config;  //返回之前做一些处理
});

//添加响应拦截器
axios.interceptors.response.use(response =>{
    // 返回response中的data数据, 这样请求成功的数据就是data了
    return response.data
},error =>{ //请求异常
    //统一处理请求异常
    alert('请求异常：'+ error.message)
    //return new Promise.reject() //可以通过Promise.reject返回异常，但是调用时得多次处理异常
    return new Promise(() => {}) //中断Promise链，永远都是初始状态（pending）
});


export default axios


/* axios.get('/api/test_get',{
    params:{
        name:'张三',
        pwd:'456'
    }
}) */

/* axios.post('/api/test_post', {name: '张三', pwd: '456'})
  .then(data => {
    console.log('请求成功', data)
  }) */