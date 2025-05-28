# Ecommerce dashboard
A web-based admin dashboard for e-commerce managers to monitor sales, revenue, and inventory. Built with Vue.js, Node.js, Vite, Pinia, Tailwind CSS, and vue-chartjs to provide advanced analytics and inventory management.

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

### Prerequisites

Node.js (v18 or higher)
npm (v9 or higher)

### Installation
##### Install dependencies
```sh
npm install
```
##### Run the development server:
```sh
npm run dev
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Dependencies
* vue: ^3.2.0



* vue-router: ^4.0.0



* pinia: ^2.0.0



* vue-chartjs: ^5.3.1



* chart.js: ^4.4.4



* tailwindcss: ^3.0.0



* postcss: ^8.0.0



* autoprefixer: ^10.0.0



* vue-toastification: ^2.0.0



* @heroicons/vue: ^2.1.5
  

 ## Navigating the Dashboard





#### Overview Tab:
Displays metric cards (Total Revenue, Orders, Products, Low Stock Alerts) with growth indicators, charts for revenue trends and category distribution, and top-performing products.



#### Revenue Analysis Tab: 
Shows advanced charts for revenue/orders correlation and category performance, plus recent monthly performance cards. Revenue data is filterable by product categories (data prepped, UI filter to be added).



#### Inventory Tab:
Lists all products with search, filter, and sort options. Allows stock updates with low stock alerts.



#### Add Product Tab:
Form to add new products (name, category, price, stock) with a mocked image upload (default URL). Successful submission updates inventory and shows a toast notification.

##Sample Data

Uses mock data inspired by Amazon and Walmart products (e.g., Smartphones, Winter Jackets, LED Lamps, Basketballs) with sales and inventory stats in src/stores/index.js.

## Additional Notes
The project leverages Tailwind CSS for a modern UI/UX and Vue Router for navigation.
