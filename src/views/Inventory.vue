<template>
  <div>
    <Header />
    <NavTabs />
    <div class="container mx-auto p-6 space-y-8">
      <div class="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-white/20 rounded-lg">
        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg p-6">
          <h2 class="text-2xl font-semibold flex items-center gap-2">
            <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a8 8 0 01-8 8m8-8a8 8 0 00-8-8m8 8v8m-8-8v-8"></path>
            </svg>
            Advanced Inventory Management
          </h2>
          <p class="text-lg text-gray-500">Comprehensive product inventory and stock level management</p>
        </div>
        <div class="pt-8 px-6">
          <!-- Filters -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              v-model="store.searchTerm"
              placeholder="🔍 Search products by name..."
              class="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-md px-4"
            />
            <select
              v-model="store.categoryFilter"
              class="w-[250px] h-12 text-lg border-2 border-gray-200 rounded-md px-4"
            >
              <option value="all">All Categories</option>
              <option value="Electronics">📱 Electronics</option>
              <option value="Clothing">👕 Clothing</option>
              <option value="Home & Garden">🏡 Home & Garden</option>
              <option value="Sports">⚽ Sports</option>
            </select>
          </div>

          <!-- Products Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              v-for="product in store.filteredProducts"
              :key="product.id"
              class="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-lg"
            >
              <div class="p-6">
                <div class="flex items-start space-x-6">
                  <div class="relative">
                    <img
                      :src="product.image"
                      :alt="product.name"
                      class="w-24 h-24 object-cover rounded-xl shadow-lg"
                    />
                    <span v-if="product.lowStock" class="absolute -top-2 -right-2 inline-flex items-center bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded animate-pulse">
                      ⚠️ Low
                    </span>
                  </div>

                  <div class="flex-1 space-y-3">
                    <div>
                      <h3 class="font-bold text-xl text-gray-900">{{ product.name }}</h3>
                      <div class="flex items-center gap-4 mt-2">
                        <span class="inline-flex items-center bg-transparent border border-gray-300 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          {{ product.category }}
                        </span>
                        <div class="flex items-center text-yellow-500">
                          <svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span class="font-medium">{{ product.rating }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-1">
                        <p class="text-sm text-gray-600">Price</p>
                        <p class="text-2xl font-bold text-green-600">${{ product.price }}</p>
                      </div>
                      <div class="space-y-1">
                        <p class="text-sm text-gray-600">Stock Level</p>
                        <p :class="product.lowStock ? 'text-red-500' : 'text-green-500'" class="text-2xl font-bold">
                          {{ product.stock }} units
                        </p>
                      </div>
                    </div>

                    <div class="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div class="text-sm text-gray-600">
                        <span class="font-medium">{{ product.sold }}</span> sold this month
                      </div>
                      <div class="flex items-center space-x-2">
                        <input
                          type="number"
                          :value="product.stock"
                          @blur="updateStock(product.id, $event.target.value)"
                          class="w-20 h-8 text-center border-2 border-gray-200 rounded-md"
                        />
                        <button
                          @click="updateStock(product.id, product.stock)"
                          class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-1 rounded-md flex items-center"
                        >
                          <svg class="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavTabs from '../components/NavTabs.vue'
import { useDashboardStore } from '../stores'

export default {
  name: 'Inventory',
  components: {
    Header,
    NavTabs,
  },
  setup() {
    const store = useDashboardStore()
    const updateStock = (id, newStock) => {
      const stockValue = parseInt(newStock)
      if (stockValue >= 0 && stockValue !== store.products.find(p => p.id === id).stock) {
        store.updateStock(id, stockValue)
      }
    }
    return { store, updateStock }
  },
}
</script>