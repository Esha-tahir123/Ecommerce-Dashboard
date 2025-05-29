<template>
     <div>
       <Header />
       <NavTabs />
       <div class="container mx-auto p-6 space-y-8">
         <div class="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-white/20 rounded-lg">
           <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg p-6">
             <h2 class="text-2xl font-semibold flex items-center gap-2">
               <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
               </svg>
               Advanced Revenue Analytics
             </h2>
             <p class="text-lg text-gray-500">Comprehensive revenue and sales performance analysis</p>
           </div>
           <div class="pt-8 px-6">
             <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
               <div>
                 <h3 class="text-xl font-semibold mb-6 text-gray-800">Monthly Revenue & Orders Correlation</h3>
                 <div class="w-full h-[450px]">
                   <Chart :data="revenueOrdersData" :options="revenueOrdersOptions" type="line" />
                 </div>
               </div>

               <div>
                 <h3 class="text-xl font-semibold mb-6 text-gray-800">Category Performance Breakdown</h3>
                 <div class="w-full h-[450px]">
                   <Chart :data="categoryDataConfig" :options="categoryOptions" type="bar" />
                 </div>
               </div>
             </div>

             <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div v-for="month in store.revenueData.slice(-3)" :key="month.month" class="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-100">
                 <h4 class="font-semibold text-lg text-indigo-900 mb-2">{{ month.month }} Performance</h4>
                 <div class="space-y-3">
                   <div class="flex justify-between items-center">
                     <span class="text-gray-600">Revenue:</span>
                     <span class="font-bold text-lg">${{ month.revenue.toLocaleString() }}</span>
                   </div>
                   <div class="flex justify-between items-center">
                     <span class="text-gray-600">Orders:</span>
                     <span class="font-bold">{{ month.orders }}</span>
                   </div>
                   <div class="flex justify-between items-center">
                     <span class="text-gray-600">Growth:</span>
                     <div :class="month.growth >= 0 ? 'text-green-600' : 'text-red-600'" class="flex items-center font-bold">
                       <svg v-if="month.growth >= 0" class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                       </svg>
                       <svg v-else class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                       </svg>
                       {{ Math.abs(month.growth) }}%
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
   import { Chart } from 'vue-chartjs'
   import { Chart as ChartJS, BarElement, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js'
   import { useDashboardStore } from '../stores'


   export default {
     name: 'RevenueAnalysis',
     components: { Header, NavTabs, Chart },
     setup() {
       const store = useDashboardStore()
       const revenueOrdersData = {
         labels: store.revenueData.map(item => item.month),
         datasets: [
           {
             type: 'bar',
             label: 'Revenue ($)',
             data: store.revenueData.map(item => item.revenue),
             backgroundColor: '#3B82F6',
             borderRadius: 4,
             yAxisID: 'y',
           },
           {
             type: 'line',
             label: 'Orders',
             data: store.revenueData.map(item => item.orders),
             borderColor: '#10B981',
             borderWidth: 4,
             tension: 0.4,
             pointBackgroundColor: '#10B981',
             pointBorderWidth: 2,
             pointRadius: 6,
             yAxisID: 'y1',
           },
         ],
       }
       const revenueOrdersOptions = {
         responsive: true,
         maintainAspectRatio: false,
         scales: {
           x: {
             grid: { borderDash: [3, 3], color: '#E5E7EB' },
             ticks: { color: '#6B7280' },
           },
           y: {
             position: 'left',
             grid: { borderDash: [3, 3], color: '#E5E7EB' },
             ticks: { color: '#3B82F6' },
           },
           y1: {
             position: 'right',
             grid: { drawOnChartArea: false },
             ticks: { color: '#10B981' },
           },
         },
         plugins: {
           tooltip: {
             backgroundColor: '#F9FAFB',
             borderColor: '#E5E7EB',
             borderWidth: 1,
             cornerRadius: 8,
             boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
           },
         },
       }
       const categoryDataConfig = {
         labels: store.categoryData.map(item => item.name),
         datasets: [
           {
             label: 'Market Share (%)',
             data: store.categoryData.map(item => item.value),
             backgroundColor: '#8B5CF6',
             borderRadius: 4,
           },
         ],
       }
       const categoryOptions = {
         indexAxis: 'y',
         responsive: true,
         maintainAspectRatio: false,
         scales: {
           x: {
             grid: { borderDash: [3, 3], color: '#E5E7EB' },
             ticks: { color: '#6B7280' },
           },
           y: {
             grid: { borderDash: [3, 3], color: '#E5E7EB' },
             ticks: { color: '#6B7280' },
           },
         },
         plugins: {
           tooltip: {
             callbacks: {
               label: function (context) {
                 const index = context.dataIndex
                 const value = context.raw
                 const amount = store.categoryData[index].amount
                 return `Market Share: ${value}% (Revenue: $${amount.toLocaleString()})`
               },
             },
             backgroundColor: '#F9FAFB',
             borderColor: '#E5E7EB',
             borderWidth: 1,
             cornerRadius: 8,
             boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
           },
         },
       }
       return { store, revenueOrdersData, revenueOrdersOptions, categoryDataConfig, categoryOptions }
     },
   }
   </script>