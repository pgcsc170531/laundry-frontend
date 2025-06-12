import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../pages/Dashboard.vue')
        },
        {
          path: 'customers',
          name: 'customers',
          component: () => import('../pages/Customers.vue')
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('../pages/Services.vue')
        },
        {
          path: 'payments',
          name: 'payments',
          component: () => import('../pages/Payments.vue')
        },
        {
          path: 'collections',
          name: 'collections',
          component: () => import('../pages/Collections.vue')
        },
        {
          path: 'history',
          name: 'history',
          component: () => import('../pages/History.vue')
        },
        {
          path: 'reports',
          name: 'reports',
          component: () => import('../pages/Reports.vue')
        },
        {
          path: 'expenses',
          name: 'expenses',
          component: () => import('../pages/Expenses.vue')
        }
      ]
    }
  ]
})

export default router
