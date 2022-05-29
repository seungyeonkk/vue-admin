import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GridView from '../views/GridView.vue'
import NoticeView from '../views/notice/NoticeView.vue'
import NoticeDetailView from '../views/notice/NoticeDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'notice',
    component: NoticeView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: NoticeDetailView
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
