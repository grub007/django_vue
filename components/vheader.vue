<template>
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <!-- 通过v-for生成标签,在Vue 2.2.0+以后的版本中v-for必须要和:key="item.id"配套使用，该方法可以提高循环效率 -->
            <!-- 通过判断index是否和currentIndex相等来判断是否为当前标签加上active的class属性 -->
            <!-- 绑定click事件，通过该事件来变更currentIndex的值从而达到控制active class属性的设置 -->
            <li v-for="(item,index) in routers" v-bind:class="{active:index == currentIndex}" 
                :key="item.id" @click="changeActive(index)">
                <!-- router-link是vue的路由导航标签，该标签与to配合使用，to后面跟的是路由路径 -->
                <router-link v-bind:to="item.url">{{item.title}}</router-link>
            </li>
        </ul>
        <form class="navbar-form navbar-right">
            <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  data() {
    return {
        routers: [
            {url: "/", title: "我的首页"},
            {url: "/note", title: "我的笔记"}
        ],
        currentIndex: 0
    };
  },
  methods: {
    //   定义class active切换的方法
      changeActive(index){
          this.currentIndex = index;
      }
  },
  created(){
    //   在页面刷新后判断当前页面的url是否与导航标签的url相等，如果相等则将当前的标签增加active属性
    // this.route.path可以获取到当前页面的url路径
    for (let i=0;i<this.routers.length;i++){
        if (this.routers[i].url == this.$route.path){
            this.currentIndex = i
            //这边的return是跳出循环,从而不需要执行所有的循环
            return
        }
    }
  }
};
</script>

<style scoped>
    .navbar {
        border-radius: 0px
    }
</style>


