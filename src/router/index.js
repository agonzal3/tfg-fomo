import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Play.vue')
    }
  },
  {
    path: '/solution',
    name: 'Solution',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Solution.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: [routers]
})

export default router
