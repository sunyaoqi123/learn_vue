import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowBlog from '../components/ShowBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShowBlog
  },
  {
    path: '/add',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/AddBlog.vue')
  }
]

const router = new VueRouter({
  routes,
  //去掉网址后的/#/
  mode : "history"
})

export default router
