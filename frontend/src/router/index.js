import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GridView from '../views/GridView.vue'
import SignIn from '@/views/authentication/SignIn'
import SignUp from '@/views/authentication/SignUp'
import ProductList from '@/views/page/ProductList'
import DefaultLayout from '@/layouts/default/index'
import PageLayout from '@/layouts/page/index'
import AuthenticationLayout from '@/layouts/authentication/index'
import NoticeView from '../views/notice/NoticeView.vue'
import NoticeDetailView from '../views/notice/NoticeDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'grid',
        name: 'grid',
        component: GridView
      },
      {
        path: 'notice',
        name: 'notice',
        component: NoticeView
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: NoticeDetailView
      }
    ]
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
