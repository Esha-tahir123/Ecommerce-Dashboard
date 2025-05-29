import { defineStore } from 'pinia'
   import { useToast } from 'vue-toastification'

   export const useDashboardStore = defineStore('dashboard', {
     state: () => ({
       products: [
         { id: 1, name: 'Smartphone X', category: 'Electronics', price: 699, stock: 5, lowStock: true, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop', rating: 4.5, sold: 120 },
         { id: 2, name: 'Winter Jacket', category: 'Clothing', price: 129, stock: 20, lowStock: false, image: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=100&h=100&fit=crop', rating: 4.2, sold: 85 },
         { id: 3, name: 'LED Desk Lamp', category: 'Home & Garden', price: 45, stock: 8, lowStock: true, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop', rating: 4.0, sold: 50 },
         { id: 4, name: 'Basketball', category: 'Sports', price: 29, stock: 15, lowStock: false, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpUtsAgtINDlyj0LmRlfvHa8Vt3ec3fp1ew&s', rating: 4.3, sold: 65 },
       ],
       revenueData: [
         { month: 'Jan', revenue: 12000, orders: 150, growth: 5 },
         { month: 'Feb', revenue: 15000, orders: 180, growth: 25 },
         { month: 'Mar', revenue: 18000, orders: 200, growth: 20 },
         { month: 'Apr', revenue: 20000, orders: 220, growth: 11 },
         { month: 'May', revenue: 22000, orders: 240, growth: 10 },
         { month: 'Jun', revenue: 25000, orders: 260, growth: 14 },
       ],
       categoryData: [
         { name: 'Electronics', value: 35, amount: 35000, color: '#3B82F6' },
         { name: 'Clothing', value: 25, amount: 25000, color: '#10B981' },
         { name: 'Home & Garden', value: 20, amount: 20000, color: '#F59E0B' },
         { name: 'Sports', value: 20, amount: 20000, color: '#EF4444' },
       ],
       searchTerm: '',
       categoryFilter: 'all',
       newProduct: { name: '', category: '', price: '', stock: '', description: '' },
     }),
     actions: {
       addProduct() {
         if (!this.newProduct.name || !this.newProduct.category || !this.newProduct.price || !this.newProduct.stock) {
           const toast = useToast()
           toast.error('Please fill in all required fields')
           return false
         }
         const product = {
           id: this.products.length + 1,
           name: this.newProduct.name,
           category: this.newProduct.category,
           price: parseFloat(this.newProduct.price),
           stock: parseInt(this.newProduct.stock),
           lowStock: parseInt(this.newProduct.stock) < 10,
           image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
           rating: 4.0,
           sold: 0
         }
         this.products.push(product)
         this.newProduct = { name: '', category: '', price: '', stock: '', description: '' }
         const toast = useToast()
         toast.success('Product added successfully!')
         return true
       },
       updateStock(id, newStock) {
         const product = this.products.find(p => p.id === id)
         if (product) {
           product.stock = newStock
           product.lowStock = newStock < 10
           const toast = useToast()
           toast.success('Stock updated successfully!')
         }
       }
     },
     getters: {
       totalRevenue: (state) => state.revenueData.reduce((sum, item) => sum + item.revenue, 0) || 0,
       monthlyGrowth: (state) => {
         if (state.revenueData.length < 2) return 0
         const current = state.revenueData[state.revenueData.length - 1].revenue
         const previous = state.revenueData[state.revenueData.length - 2].revenue
         return previous ? (((current - previous) / previous) * 100).toFixed(1) : 0
       },
       totalOrders: (state) => state.revenueData.reduce((sum, item) => sum + item.orders, 0) || 0,
       totalProducts: (state) => state.products.length || 0,
       lowStockProducts: (state) => state.products.filter(p => p.lowStock).length || 0,
       filteredProducts: (state) => {
         return state.products
           .filter(product => product.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
           .filter(product => state.categoryFilter === 'all' || product.category === state.categoryFilter)
       }
     }
   })