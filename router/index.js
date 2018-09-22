import Vue from 'vue'
import Router from 'vue-router'

import Vmain from "@/components/vmain"
import Vnote from "@/components/vnote"


//Vue实例化对象注册Router对象
Vue.use(Router)

export default new Router({
  // 这边的key必须为routes
  routes: [
    {
      path: '/',
      name: 'Vmain',
      // 一个routes对应一个组件
      component: Vmain
    },
    {
      path: '/note',
      name: 'Vnote',
      // 一个routes对应一个组件
      component: Vnote
    }
  ]
})
