<template>
  <div class="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
    <div class="container mx-auto p-6">
      <div class="text-center">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          E-commerce Admin Dashboard
        </h1>
        <p class="text-gray-600 text-lg">Advanced analytics and inventory management platform</p>
        <div class="flex justify-center gap-4 mt-4">
          <span class="inline-flex items-center bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded animate-pulse">
            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            Live Data
          </span>
          <span class="inline-flex items-center bg-transparent border border-gray-300 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
            Real-time Updates
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>