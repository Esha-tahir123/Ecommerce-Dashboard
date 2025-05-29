<template>
    <div class="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 text-white" :style="{ background: gradient }">
      <div class="p-4 flex flex-row items-center justify-between">
        <div>
          <div class="text-sm font-medium" :class="titleColor">{{ title }}</div>
          <div class="text-3xl font-bold">{{ value }}</div>
          <div class="flex items-center mt-2">
            <svg v-if="growth >= 0" class="h-4 w-4 mr-1" :class="iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
            <svg v-else class="h-4 w-4 mr-1" :class="iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <p class="text-xs" :class="subtitleColor">{{ subtitle }}</p>
          </div>
        </div>
        <div class="h-5 w-5" :class="iconColor">
          <svg v-if="title === 'Total Revenue'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <svg v-if="title === 'Total Orders'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <svg v-if="title === 'Total Products'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          <svg v-if="title === 'Low Stock Alert'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'MetricCard',
    props: {
      title: String,
      value: [String, Number],
      subtitle: String,
      bgColor: String,
      growth: Number
    },
    computed: {
      gradient() {
        const gradients = {
          green: 'linear-gradient(to bottom right, #10B981, #059669)',
          blue: 'linear-gradient(to bottom right, #3B82F6, #2563EB)',
          purple: 'linear-gradient(to bottom right, #A855F7, #EC4899)',
          orange: 'linear-gradient(to bottom right, #F97316, #EF4444)'
        }
        return gradients[this.bgColor] || 'none'
      },
      titleColor() {
        return {
          'text-green-100': this.bgColor === 'green',
          'text-blue-100': this.bgColor === 'blue',
          'text-purple-100': this.bgColor === 'purple',
          'text-orange-100': this.bgColor === 'orange'
        }
      },
      subtitleColor() {
        return {
          'text-green-100': this.bgColor === 'green',
          'text-blue-100': this.bgColor === 'blue',
          'text-purple-100': this.bgColor === 'purple',
          'text-orange-100': this.bgColor === 'orange'
        }
      },
      iconColor() {
        return {
          'text-green-200': this.bgColor === 'green',
          'text-blue-200': this.bgColor === 'blue',
          'text-purple-200': this.bgColor === 'purple',
          'text-orange-200 animate-pulse': this.bgColor === 'orange'
        }
      },
    },
  }
  </script>