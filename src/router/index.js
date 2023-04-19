import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeedView from '@/views/GlobalFeedView.vue'
import RegisterView from "@/views/RegisterView.vue"
import LoginView from "@/views/LoginView"

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeedView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/settings',
    name: 'settings',
    component: LoginView
  },
  {
    path: '/createArticle',
    name: 'createArticle',
    component: LoginView
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
