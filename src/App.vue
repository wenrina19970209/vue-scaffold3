<template>
   <!-- 根组件 -->
   <div>
       <router-view/>
       <FooterGuide v-if="$route.meta.isFooterGuide"/>
   </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import { reCategorys,reAddress,reShops } from './api'
export default {
    name:'App',
    data(){
        return {
            msg:'App Component'
        }
    },
    mounted(){
        //分发action,从后台获取数据到state
        this.$store.dispatch('getAddress')
    },
    components:{ //注册组件
        FooterGuide
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>




