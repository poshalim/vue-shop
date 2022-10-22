import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import Delivery from '@/views/Delivery'
import Return from '@/views/Return'
import Contacts from '@/views/Contacts'
import Product from '@/views/Product'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: Delivery
  },
  {
    path: '/return',
    name: 'return',
    component: Return
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/product/:slug',
    name: 'product',
    component: Product
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
