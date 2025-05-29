import { createApp } from 'vue'
   import App from './App.vue'
   import router from './router'
   import { createPinia } from 'pinia'
   import Toast from 'vue-toastification'
   import 'vue-toastification/dist/index.css'
   import './style.css'
   import './lib/chartSetup' // Add this line to initialize Chart.js

   const app = createApp(App)
   const pinia = createPinia()

   const toastOptions = {
     position: 'top-right',
     timeout: 5000,
     closeOnClick: true,
     pauseOnFocusLoss: true,
     pauseOnHover: true,
     draggable: true,
     draggablePercent: 0.6,
     showCloseButtonOnHover: false,
     hideProgressBar: true,
     closeButton: 'button',
     icon: true,
     rtl: false,
   }

   app.use(router)
   app.use(pinia)
   app.use(Toast, toastOptions)
   app.mount('#app')