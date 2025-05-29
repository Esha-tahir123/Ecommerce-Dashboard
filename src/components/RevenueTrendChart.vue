<template>
     <div class="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 border-white/20">
       <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg p-6">
         <h2 class="text-lg font-semibold flex items-center gap-2">
           <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
           </svg>
           Revenue Trend Analysis
         </h2>
         <p class="text-gray-500">Monthly performance with growth indicators</p>
       </div>
       <div class="pt-6 px-6">
         <div class="w-full h-[350px]">
           <Chart :data="chartData" :options="chartOptions" type="line" />
         </div>
       </div>
     </div>
   </template>

   <script>
   import { Chart } from 'vue-chartjs'
   import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip } from 'chart.js'
   import { useDashboardStore } from '../stores'

   ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip)

   export default {
     name: 'RevenueTrendChart',
     components: { Chart },
     setup() {
       const store = useDashboardStore()
       const chartData = {
         labels: store.revenueData.map(item => item.month),
         datasets: [
           {
             label: 'Revenue',
             data: store.revenueData.map(item => item.revenue),
             fill: true,
             backgroundColor: (ctx) => {
               const canvas = ctx.chart.ctx
               const gradient = canvas.createLinearGradient(0, 0, 0, 350)
               gradient.addColorStop(0, '#3B82F6CC')
               gradient.addColorStop(1, '#3B82F619')
               return gradient
             },
             borderColor: '#3B82F6',
             borderWidth: 3,
             tension: 0.4,
           },
         ],
       }
       const chartOptions = {
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
                 return `Revenue: $${context.raw.toLocaleString()}`
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