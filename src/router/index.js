import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../views/home/Dashboard.vue'
import LoginView from '../views/auth/LoginView.vue'
import WelcomeView from '../views/auth/WelcomeView.vue'
import GiveBalanceView from '../views/management/GiveBalanceView.vue'
import RegisteredUsersView from '../views/management/RegisteredUsersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/give-balance',
    name: 'give-balance',
    component: GiveBalanceView
  },
  {
    path: '/registered-users',
    name: 'registered-users',
    component: RegisteredUsersView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
