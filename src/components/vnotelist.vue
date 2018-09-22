<template>
    <ul class="vnotelist">
        <!-- 父标签在向子标签传值时通过v-bind:key实现，这边将循环的item值与index值分别传递给data与indexValue两个变量 -->
        <!-- 给Vnoteitem组件添加updateNote笔记更新事件，因为Vnoteitem为vue组件所以事件必须要加修饰符.native -->
        <Vnoteitem v-for="(item,index) in getAllData" :key="item.id" 
            v-bind:data="item" v-bind:indexValue="index" @click.native="updateNote(item)">

        </Vnoteitem>
    </ul>
</template>

<script>
import Vnoteitem from "@/components/vnoteitem"
export default {
    name: "Vnotelist",
    data(){
        return {
        
        }
    },
    components: {
        Vnoteitem
    },
    computed: {
       getAllData(){
        // 将store中的allList数组赋值给getAllData
           return this.$store.state.allList
       } 
    },
    methods: {
       updateNote(noteobj){
          this.$store.dispatch("displayNoteContent", noteobj)
       } 
    }
}
</script>

<style scoped>

</style>
