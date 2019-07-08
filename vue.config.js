module.exports = {
    devServer: {
      open:true, //自动打开浏览器
      proxy: {
        '/api':{ //匹配所有以'/api'开头的请求路径
            target:'http://localhost:5000',//代理目标的基础路径，服务器的地址（告诉代理服务器要转发的地址）
            changeOrigin:true,//支持跨域
            pathRewrite:{ //重写路径：去掉路径中开头的'/api'
              '^/api': '' //告诉代理服务器，在真正转发请求地址之前，需要将前面的/api修改为空串（后台服务器不需要/api）
            }
        }
       
      },
      overlay: {
        warnings: true,  //警告信息
        errors: true    //错误信息
      }
    }
  }