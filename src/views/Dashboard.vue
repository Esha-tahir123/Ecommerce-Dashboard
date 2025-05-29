<template>
  <div>
    <Header   />
    <NavTabs />
    <div class="container mx-auto p-6 space-y-8">
      <!-- Metrics Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
  title="Total Revenue"
  :value="`$${store.totalRevenue.toLocaleString()}`"
  subtitle="+${store.monthlyGrowth}% from last month"
  bgColor="green"
  icon="DollarSign"
  :growth="parseFloat(store.monthlyGrowth)"
/>
<MetricCard
  title="Total Orders"
  :value="store.totalOrders.toLocaleString()"
  subtitle="+8% from last month"
  bgColor="blue"
  icon="ShoppingCart"
  :growth="8"
/>
<MetricCard
  title="Total Products"
  :value="store.totalProducts"
  subtitle="Across 4 categories"
  bgColor="purple"
  icon="Package"
  :growth="0"
/>
<MetricCard
  title="Low Stock Alert"
  :value="store.lowStockProducts"
  subtitle="Products need restocking"
  bgColor="orange"
  icon="AlertTriangle"
  :growth="0"
/>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RevenueTrendChart />
        <CategoryDistributionChart />
      </div>

      <!-- Top Performing Products Section -->
      <div class="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-white/20 rounded-lg">
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-lg p-6">
          <h2 class="text-lg font-semibold flex items-center gap-2">
            <svg class="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Top Performing Products
          </h2>
          <p class="text-gray-500">Best selling products this month</p>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCard v-for="product in store.products.slice(0, 4)" :key="product.id" :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavTabs from '../components/NavTabs.vue'
import MetricCard from '../components/MetricCard.vue'
import RevenueTrendChart from '../components/RevenueTrendChart.vue'
import CategoryDistributionChart from '../components/CategoryDistributionChart.vue'
import ProductCard from '../components/ProductCard.vue'
import { useDashboardStore } from '../stores'

export default {
  name: 'Dashboard',
  components: {
    Header,
    NavTabs,
    MetricCard,
    RevenueTrendChart,
    CategoryDistributionChart,
    ProductCard,
  },
  setup() {
    const store = useDashboardStore()
    return { store }
  },
}
</script>