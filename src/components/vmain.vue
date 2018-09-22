<template>
   <div class="container">
       <div class="row">
           <div class="col-md-12">
               <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">内容列表</h3>
                </div>
                <div class="panel-body">
                    <ul>
                       <li v-for="item in listInfo" :key="item.id">
                           <a :href="item.url">{{item.title}}</a>
                        </li> 
                    </ul>
                </div>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  name: "Vmain",
  data() {
    return {
        listInfo: [
            {url: "#", title: "我的图片"},
            {url: "#", title: "我的代码"},
            {url: "#", title: "我的收藏"},
            {url: "#", title: "我的笔记"}
        ]
    };
  }
};
</script>

<style scoped>
</style>


