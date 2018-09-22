<template>
    <div class="wrap">
        <input type="text" class="form-control widthstyle" placeholder="请输入标题" v-model="titleHandler">
            <button class="btn btn-default" @click="addNote">提交</button>
            <el-button type="primary" @click="submitUpdateNote">编辑提交</el-button>
        <div class="mark">
            <textarea class="editor" id="" cols="100" rows="10" v-model="markdownHandler">
            </textarea>
        <!-- ref是对标签元素进行标记然后通过this.$refs.contentHtml获取该标签 -->
       <div class="show" v-html="currentValue" ref="contentHtml"></div>
   </div>
    </div>
   
</template>

<script>
import Marked from "marked"
export default {
    name: "vmark",
    data(){
        return {
           
        }
    },
    methods: {
       //添加笔记方法 
       addNote(){
            let noteData = {
               title: this.$store.state.title,
               markdown: this.$store.state.markdown,
               content: this.$refs.contentHtml.innerText
           }
        //    调用store里面的mutations方法，并将noteData作为参数传递到mutations方法中
        //    this.$store.commit("addOneNote", noteData);   该调用只能实现同步调用

        //    实现异步调用,将创建的数据分发给actions，actions通过ajax将数据传递给后台
            this.$store.dispatch("addOneNote", noteData)
       },
       //数据更新提交
       submitUpdateNote(){
           let noteData = {
               title: this.$store.state.title,
               markdown: this.$store.state.markdown,
               content: this.$refs.contentHtml.innerText,
               id: this.$store.state.noteid
           }
           this.$store.dispatch("submitUpdateNote", noteData)
       } 
    },
    computed: {
        //通过v-model实现双向绑定，将title标题存入vuex 的store变量中
        titleHandler: {
            //在input输入内容时将会把获取的内容赋值给vuex store中, 这边的变量必须为newvalue
            set: function(newvalue){
               this.$store.state.title = newvalue 
            },
            get: function(){
                return this.$store.state.title
            }
        },
        //通过v-model双向绑定将markdown内容存入vuex的store变量中
        markdownHandler: {
            set: function(newvalue){
               this.$store.state.markdown = newvalue 
            },
            get: function(){
                return this.$store.state.markdown
            }
        },
        currentValue(){
            // 这边使用的Marked方法,该方法主要是用来生成简便的markdown编辑器工具需要安装marked 命令npm install marked --save
            return Marked(this.markdownHandler)
        }
    }
    
}
</script>

<style scoped>
    .t {
        width:  300px;
        height: 100px;
    }

    .mark {
        width:800px;
        height: 400px;
        margin: 0 auto;
    }

    .editor, .show{
        float: left;
        width: 397px;
        height: 400px;
        border: 1px solid #666;
    }

    .widthstyle {
        width: 200px;
        display: inline-block
    }
</style>