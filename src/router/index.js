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
    path: '/feed',
    name: 'yourFeed',
    component: GlobalFeedView
  },
  {
    path: '/tags/:slug',
    name: 'tag',
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
    path: '/articles/:slug',
    name: 'article',
    component: LoginView
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: LoginView
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: LoginView
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: LoginView
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
