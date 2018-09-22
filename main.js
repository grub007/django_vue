// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 导入vue
import Vue from 'vue'

//这边其实导入了App.vue,但由于webpack进行了优化所以这边简写成了App
import App from './App'

//导入router文件夹,其实webpack也进行了优化其实是导入了router文件夹下的所有文件
import router from './router'

//导入vuex， vuex需要额外下载 npm install vuex --save
import Vuex from "vuex"
import $ from "jquery"
// 将Vuex与vue进行关联
Vue.use(Vuex);

//引用axios, 全局设置axios的baseurl
import axios from "axios"
axios.defaults.baseURL = 'http://127.0.0.1:10001';

// 引入element-ui, 该模块相当于bootstrap组件，需要单独下载npm i element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

// 实列化vue store对象, store就是存放所有数据的容器
const store = new Vuex.Store({
  state: {
    //这里面的状态跟每个组件的数据属性有关系
    //定义一个allLis数组用来存放从后台获取的笔记列表数据
    allList: [],
    // 定义title、content、markdown初始化值
    title: "",
    content: "",
    markdown: "",
    noteid: "" 
  },
  mutations: {
    // mutations主要用来存放自定义处理数据的方法,但其它组件不能直接调用mutations中的方法
    // mutations只能是同步操作, 在创建了actions后建议mutations中的方法通过大写来字母定义
     GETAllDATAS(state, newdata){
        //将actions提交来的newdata赋值给allList数组
        state.allList = newdata
     },
    // 增加一个笔记
     ADDONENOTE(state, newdata){
        state.allList.push(newdata);
        // 提交成功后将显示在input框中的内容清空掉
        state.markdown = "";
        state.title = ""  
     },
     //删除笔记
     DELETEONENOTE(state, itemid){
        for (let i=0;i<state.allList.length;i++){
          // 在allList中删除对应ID的对象
          if (state.allList[i].id == itemid){
            state.allList.splice(i, 1);
            return
          }
        }
     },
     // 增加一个点击itemlist，将item的内容显示在markdown上, 将点击的Note内容赋值给state里变量
     DISPLAYNOTECONTENT(state, itemobj){
       state.title = itemobj.title;
       state.markdown = itemobj.markdown;
       state.content = itemobj.content
       state.noteid = itemobj.id
     },
     SUBMITUPDATENOTE(state, itemobj){
      for (let i=0;i<state.allList.length;i++){
        // 在allList中的数据变更为编辑后的数据,并将更新的对象内容存入allList, 将对应markdown内容清空
        if (state.allList[i].id == itemobj.id){
          state.allList[i].title = itemobj.title;
          state.allList[i].content = itemobj.content;
          state.allList[i].markdown = itemobj.markdown;
          state.title = "";
          state.markdown = "";
          state.content = "";
          state.noteid = ""
          return
        }
      } 
     }
  },
  // 创建actions，actions内的操作都为异步操作
  actions: {
    // 定义获取列表数据的方法
    getAllDatas(context){
      //使用axios发送get请求
      axios.get("/vuetest/markdown/").then(function(res){
        // .then中主要是成功返回执行的事件
        context.commit("GETAllDATAS",res.data.results)
      }).catch(function(err){
          console.log(err)
      })
    },

    // 定义创建note内容的方法
    addOneNote(context, addnotedate){
      // axios post给后端传数据data变量放在post(url, data)参数，then中的变量res.data为后端传给前端的参数
      axios.post("/vuetest/markdown/", addnotedate).then(function(res){
        context.commit("ADDONENOTE", res.data)
      }).catch(function(err){
        console.log(err)
      })  
    },
    // 删除note
    deleteOneNote(context, itemid){
      axios.delete(`/vuetest/markdown/${itemid}`).then(function(res){
        context.commit("DELETEONENOTE", itemid)
      }).catch(function(err){
        console.log(err)
      })
    },
    // 增加一个点击itemlist，将item的内容显示在markdown上
    displayNoteContent(context, noteobj){
      context.commit("DISPLAYNOTECONTENT", noteobj)
    },
    // Note数据更新提交
    submitUpdateNote(context, updatenoteobj){
      axios.put(`/vuetest/markdown/${updatenoteobj.id}/`, updatenoteobj).then(function(res){
        context.commit("SUBMITUPDATENOTE", res.data)
      }).catch(function(err){
        console.log(err)
      })  
    }
  }
})


// 该配置是vue生产环境的一个配置文件，如果不配置也没什么影响
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //将router对象挂载到Vue对象,这边的router相当于router:router
  router,
  //将store挂载到当前vue对象,其他组件可以通过this.$store来访问该对象
  store,
  // 这边的components是vue的主组件其挂载的router对象必须在App组件中调用
  components: { App },
  template: '<App/>'
})
