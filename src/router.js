import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Plus from './views/Plus.vue'
import Minus from './views/Minus.vue'
import History from './views/History.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/plus',
      name: 'plus',
      component: Plus,
    },
    {
      path: '/minus',
      name: 'minus',
      component: Minus,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
  ]
})
