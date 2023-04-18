import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from "@/views/RegisterView.vue"
import LoginView from "@/views/LoginView"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
