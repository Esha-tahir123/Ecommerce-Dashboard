<template>
     <div class="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-white/20">
       <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg p-6">
         <h2 class="text-lg font-semibold flex items-center gap-2">
           <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a8 8 0 01-8 8m8-8a8 8 0 00-8-8m8 8v8m-8-8v-8"></path>
           </svg>
           Category Distribution
         </h2>
         <p class="text-gray-500">Revenue breakdown by product categories</p>
       </div>
       <div class="pt-6 px-6">
         <div class="w-full h-[350px]">
           <Chart :data="chartData" :options="chartOptions" type="pie" />
         </div>
       </div>
     </div>
   </template>

   <script>
   import { Chart } from 'vue-chartjs'
   import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
   import { useDashboardStore } from '../stores'

   ChartJS.register(ArcElement, Tooltip, Legend)

   export default {
     name: 'CategoryDistributionChart',
     components: { Chart },
     setup() {
       const store = useDashboardStore()
       const chartData = {
         labels: store.categoryData.map(item => item.name),
         datasets: [
           {
             data: store.categoryData.map(item => item.value),
             backgroundColor: store.categoryData.map(item => item.color),
             borderColor: '#fff',
             borderWidth: 2,
           },
         ],
       }
       const chartOptions = {
         responsive: true,
         maintainAspectRatio: false,
         plugins: {
           legend: { position: 'bottom' },
           tooltip: {
             callbacks: {
               label: function (context) {
                 const index = context.dataIndex
                 const amount = store.categoryData[index].amount
                 return `${context.label}: ${context.raw}% ($${amount.toLocaleString()})`
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
       return { chartData, chartOptions }
     },
   }
   </script>