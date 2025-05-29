<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold text-purple-600 mb-4">+ Add New Product</h2>
    <p class="text-gray-500 mb-6">Register a new product in your inventory system</p>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-6" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-gray-700">Product Name *</label>
        <input v-model="form.name" type="text" class="w-full p-2 border rounded mt-1" placeholder="Enter product name" required>
      </div>
      <div>
        <label class="block text-gray-700">Description</label>
        <textarea v-model="form.description" class="w-full p-2 border rounded mt-1" placeholder="Enter detailed product description..."></textarea>
      </div>
      <div>
        <label class="block text-gray-700">Category *</label>
        <select v-model="form.category" class="w-full p-2 border rounded mt-1" required>
          <option disabled value="">Select category</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
      <div>
        <label class="block text-gray-700">Price *</label>
        <input v-model="form.price" type="number" step="0.01" class="w-full p-2 border rounded mt-1" placeholder="0.00" required>
      </div>
      <div>
        <label class="block text-gray-700">Initial Stock *</label>
        <input v-model="form.stock" type="number" class="w-full p-2 border rounded mt-1" placeholder="0" required>
      </div>
      <div class="md:col-span-2">
        <label class="block text-gray-700">Product Image</label>
        <div class="w-full h-32 border-2 border-dashed border-purple-300 rounded mt-1 flex items-center justify-center">
          <span class="text-gray-500">Click to upload product image<br>PNG, JPG up to 10MB</span>
        </div>
      </div>
      <div class="md:col-span-2">
        <button type="submit" class="w-full bg-purple-500 text-white p-2 rounded">+ Add Product to Inventory</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useDashboardStore } from '../stores'

export default {
  name: 'AddProductForm',
  setup() {
    const store = useDashboardStore()
    return { store }
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        category: '',
        price: 0,
        stock: 0,
      },
      categories: ['Electronics', 'Clothing', 'Home & Garden', 'Sports'],
    }
  },
  methods: {
    handleDashSubmit() {
      // In a real app, this would send data to a backend
      console.log('Product added:', this.form)
      this.form = { name: '', description: '', category: '', price: 0, stock: 0 }
    },
  },
}
</script>