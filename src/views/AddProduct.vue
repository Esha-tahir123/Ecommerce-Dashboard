<template>
  <div>
    <Header />
    <NavTabs />
    <div class="container mx-auto p-6 space-y-8">
      <div class="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-white/20 rounded-lg">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-lg p-6">
          <h2 class="text-2xl font-semibold flex items-center gap-2">
            <svg class="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Add New Product
          </h2>
          <p class="text-lg text-gray-500">Register a new product in your inventory system</p>
        </div>
        <div class="pt-8 px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="space-y-2">
                <label for="product-name" class="text-lg font-medium">Product Name *</label>
                <input
                  id="product-name"
                  v-model="store.newProduct.name"
                  placeholder="Enter product name"
                  class="h-12 text-lg border-2 border-gray-200 focus:border-purple-500 transition-colors rounded-md w-full px-4"
                />
              </div>

              <div class="space-y-2">
                <label for="category" class="text-lg font-medium">Category *</label>
                <select
                  id="category"
                  v-model="store.newProduct.category"
                  class="h-12 text-lg border-2 border-gray-200 rounded-md w-full px-4"
                >
                  <option value="" disabled>Select category</option>
                  <option value="Electronics">📱 Electronics</option>
                  <option value="Clothing">👕 Clothing</option>
                  <option value="Home & Garden">🏡 Home & Garden</option>
                  <option value="Sports">⚽ Sports</option>
                </select>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="price" class="text-lg font-medium">Price *</label>
                  <input
                    id="price"
                    type="number"
                    v-model="store.newProduct.price"
                    placeholder="0.00"
                    step="0.01"
                    class="h-12 text-lg border-2 border-gray-200 focus:border-purple-500 transition-colors rounded-md w-full px-4"
                  />
                </div>

                <div class="space-y-2">
                  <label for="stock" class="text-lg font-medium">Initial Stock *</label>
                  <input
                    id="stock"
                    type="number"
                    v-model="store.newProduct.stock"
                    placeholder="0"
                    class="h-12 text-lg border-2 border-gray-200 focus:border-purple-500 transition-colors rounded-md w-full px-4"
                  />
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="space-y-2">
                <label for="description" class="text-lg font-medium">Description</label>
                <textarea
                  id="description"
                  v-model="store.newProduct.description"
                  placeholder="Enter detailed product description..."
                  rows="4"
                  class="text-lg border-2 border-gray-200 focus:border-purple-500 transition-colors resize-none rounded-md w-full px-4 py-2"
                />
              </div>

              <div class="space-y-2">
                <label for="image" class="text-lg font-medium">Product Image</label>
                <div class="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors cursor-pointer">
                  <svg class="h-16 w-16 mx-auto text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a8 8 0 01-8 8m8-8a8 8 0 00-8-8m8 8v8m-8-8v-8"></path>
                  </svg>
                  <p class="text-lg text-purple-700 font-medium mb-2">Click to upload product image</p>
                  <p class="text-sm text-purple-500">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <button
                @click="store.addProduct"
                class="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 rounded-md flex items-center justify-center"
              >
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Add Product to Inventory
              </button>
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
  name: 'AddProduct',
  components: {
    Header,
    NavTabs,
  },
  setup() {
    const store = useDashboardStore()
    return { store }
  },
}
</script>