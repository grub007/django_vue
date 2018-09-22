<template>
    <li class="vnoteitem">
        <h2>{{indexValue + 1 + data.title}}</h2>
        <p>{{data.content}}</p>
        <!-- <el-button type="danger" icon="el-icon-delete" circle></el-button> -->
        <!-- 调用Vbutton组件,typed值设为success，这边实现逻辑其实就是el-button type的实现逻辑 -->
        <!-- 给vue组件绑定事件时必须要用修饰符.native -->
        <Vbutton typed="danger" @click.native="deleteItem(data.id)">删除</Vbutton>
    </li>
</template>

<script>
// 引用自定义的Vbutton组件，该组件根据typed的值来给对应的class值
import Vbutton from "@/components/vbutton"
export default {
    name: "Vnoteitem",
    data(){
        return {

        }
    },
    // props是将父组件传递过来的值进行类型验证，如果类型错误vue会发出告警，但渲染页面没问题
    // props支持的数据类型:    
    // String
    // Number
    // Boolean
    // Function
    // Object
    // Array
    props: {
        data: Object,
        indexValue: Number
    },
    components: {
        Vbutton
    },
    methods: {
      deleteItem(itemid){
          //调用actions中的方法来删除数据
          this.$store.dispatch("deleteOneNote", itemid)
      }  
    }
}
</script>

<style scoped>

</style>