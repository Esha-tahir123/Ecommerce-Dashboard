<template>
  <nav class="container mx-auto p-6">
    <div class="grid grid-cols-4 lg:w-[700px] mx-auto h-14 bg-white/50 backdrop-blur-sm border-2 border-white/20 shadow-lg rounded-lg">
      <router-link to="/" class="flex items-center justify-center text-base font-medium" :class="{ 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg': $route.path === '/', 'text-gray-700 hover:bg-gray-200': $route.path !== '/' }">
        Overview
      </router-link>
      <router-link to="/revenue" class="flex items-center justify-center text-base font-medium" :class="{ 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg': $route.path === '/revenue-analysis', 'text-gray-700 hover:bg-gray-200': $route.path !== '/revenue-analysis' }">
        Revenue Analysis
      </router-link>
      <router-link to="/inventory" class="flex items-center justify-center text-base font-medium" :class="{ 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg': $route.path === '/inventory', 'text-gray-700 hover:bg-gray-200': $route.path !== '/inventory' }">
        Inventory
      </router-link>
      <router-link to="/add-product" class="flex items-center justify-center text-base font-medium" :class="{ 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg': $route.path === '/add-product', 'text-gray-700 hover:bg-gray-200': $route.path !== '/add-product' }">
        Add Product
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavTabs',
}
</script>