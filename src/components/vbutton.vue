<template>
    <!-- 自己封装按钮 -->
    <button class="btn" :class="buttonStyle">
        <!-- slot标签为插槽具有分发功能，作用是这边写的按钮组件在其它地方调用时可以随意变更文字 -->
        <slot>按钮</slot>
    </button>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: {
        typed: String
    },
    computed: {
        buttonStyle(){
            // 这边return必须为对象因为:class="{}"这里面就是必须为对象
            return {
                "btn-success": this.typed == "success" ? true:false,  //判断typed值是否为success，如果是class则添加btn-success
                "btn-default": this.typed == "default" ? true:false,
                "btn-danger": this.typed == "danger" ? true:false 
            }
        }
    }
}
</script>

<style scoped>

</style>

