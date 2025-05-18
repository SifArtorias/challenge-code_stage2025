// src/router.js
import { createRouter, createWebHistory } from 'vue-router'

// Importe tes composants de page
import HomePage from './pages/HomePage.vue'
// @ts-ignore
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/dashboard', name: 'dashboard', component: DashboardPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router