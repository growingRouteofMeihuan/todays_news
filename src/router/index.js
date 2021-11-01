import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import xiguaPlay from '@/components/xiguaPlay'
import moviePlay from '@/components/moviePlay'
import login from '@/components/login'
import userCenter from '@/components/userCenter'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/xiguaPlay',
      name: 'xiguaPlay',
      component: xiguaPlay
    }, {
      path: '/moviePlay',
      name: 'moviePlay',
      component: moviePlay
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    }
  ]
})
