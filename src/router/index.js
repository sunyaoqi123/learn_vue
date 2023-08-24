import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowBlog from '../components/ShowBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'show',
    component: ShowBlog
  },
  {
    path: '/add',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/AddBlog.vue')
  },
  {
    path: '/blog/:id',
    name:'singleblog',
    component: () => import( '../components/SingleBlog.vue')
  },
  {
    path: '/edit/:id',
    name:'editblog',
    component: () => import( '../components/EditBlog.vue')
  },
  {
    path: '/recycle',
    name:'recycle',
    component: () => import('../components/RecycleBlog.vue')
  },
  {
    path: '/recycleblog/:id',
    name:'recycleblog',
    component: () => import('../components/SingleBlog2.vue')
  }
]

const router = new VueRouter({
  routes,
  //去掉网址后的/#/
  mode : "history"
})

export default router
