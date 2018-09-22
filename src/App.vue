<template>
  <div id="app">
    <Vheader></Vheader>
    <!-- App组件中调用router对象，必须执行该步骤否则router内容无法在页面中显示 -->
    <router-view/>
    
  </div>
</template>

<script>

// 引用bootstrap的css文件,这边导入只要从node_modules里层文件夹开始导入即可，webpack优化了查询路径
import "bootstrap/dist/css/bootstrap.min.css"
import Vheader from "@/components/vheader"

//引用jquery, jquery需要通过npm install jquery --save 来安装
import $ from "jquery"

export default {
  name: 'App',
  components: {
    Vheader
  },
  //该方法是vue自带方法主要是在页面加载完成后调用该方法
  //加页面加载完成后到后台请求数据
  mounted(){
    //方法一：
    //调用vuex 中store对象中mutations中的getAllDatas方法,必须通过commit来调用， 该方法只能实现同步操作
    // this.$store.commit("getAllDatas");

    //方法二： 通过vuex actions操作可以实现异步操作
    this.$store.dispatch("getAllDatas")

  },
  // created方法是页面加载之前调用该方法
  created(){

  }
}
</script>

<style>

</style>
