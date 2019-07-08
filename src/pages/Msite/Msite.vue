<template>
   <section class="msite">
        <!--首页头部-->
        <Header :title="address.name || '正在定位中...'">
            <span class="header_search" slot="left">
                <i class="iconfont icon-sousuo"></i>
            </span>

            <span class="header_login" slot="right" @click="$router.push('/login')">
                <span class="header_login_text">登录|注册</span>
            </span>
        </Header>
        <!--首页导航-->
        <nav class="msite_nav">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- categorysArr （二维数组） -->
                    <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
                        <a href="javascript:" class="link_to_food" v-for="(c,index) in categorys" :key="index">
                            <div class="food_container">
                                <img :src="'https://fuss10.elemecdn.com' + c.image_url">
                            </div>
                            <span>{{c.title}}</span>
                        </a>
                    </div>

                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!--首页附近商家-->
        <ShopList/>
    </section>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
      name:'Msite',
      computed:{
          ...mapState(['address','categorys']),

        categorysArr(){
             /* 
                根据分类的一维数组生成二维数组
                小数组的最大长度为8
            */
            //取到分类数据
            let bigArr = []  //大数组
            let smallArr = []  //小数组
             const {categorys} =  this

            //计算产生结果
            categorys.forEach(c => {

                if(smallArr.length === 0){
                    //将小数组放在大数组中（一次只能放一个）
                    bigArr.push(smallArr)
                }
                
                //将数据放在小数组中（一个小数组只能放8个）
                smallArr.push(c)
                if(smallArr.length === 8){
                    smallArr = []
                }
                
            });
            //返回结果
            return bigArr
        }

      },
      /* watch:{//数据监视

          categorys(){ //数据更新了
                this.$nextTick(()=>{// 回调函数在界面更新之后执行
                //组件页面初始显示之后
                new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
            
                })    
            })
          }
      }, */
      async mounted(){
        //分发action,异步获取商家列表
        this.$store.dispatch('getShops')
        //分发action,异步获取分类列表
       /*  this.$store.dispatch('getCategorys', ()=>{ //getCategorys数据更新了
              //组件页面初始显示之后
              this.$nextTick(()=>{
                   new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
            
                    })    
              })
               
          }) */
          await this.$store.dispatch('getCategorys')  //返回的promise的数据状态更新且变化后才成功
           new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
            
                })    


       /*  setTimeout(()=>{
            //组件页面初始显示之后
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
        
            })    
        },1000) */

         /* 
            解决创建swiper对象之后不能正常轮播
            原因: 创建对象的时机太早(必须在列表显示之后)
            解决: 
            1. watch + nextTick()
            2. callback + nextTick()
            3. 利用dispatch()返回的promise
            */
        
      },
      components:{//注册组件
        ShopList
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
   
  .msite  
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
