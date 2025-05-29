import { createRouter, createWebHistory } from 'vue-router'
   import Dashboard from '../views/Dashboard.vue'
   import RevenueAnalysis from '../views/RevenueAnalysis.vue'
   import Inventory from '../views/Inventory.vue'
   import AddProduct from '../views/AddProduct.vue'

   const routes = [
     { path: '/', name: 'Dashboard', component: Dashboard },
     { path: '/revenue', name: 'RevenueAnalysis', component: RevenueAnalysis },
     { path: '/inventory', name: 'Inventory', component: Inventory },
     { path: '/add-product', name: 'AddProduct', component: AddProduct },
   ]

   const router = createRouter({
     history: createWebHistory(),
     routes,
   })

   export default router