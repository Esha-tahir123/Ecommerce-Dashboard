import {
     Chart as ChartJS,
     LineController, // Add LineController
     LineElement,
     PointElement,
     LinearScale,
     CategoryScale,
     Filler,
     Tooltip,
     PieController, // Add PieController
     ArcElement,
     BarController, // Add BarController
     BarElement,
     Legend
   } from 'chart.js'

   ChartJS.register(
     LineController, // Register the controller for "line" charts
     LineElement,
     PointElement,
     LinearScale,
     CategoryScale,
     Filler,
     Tooltip,
     PieController, // Register the controller for "pie" charts
     ArcElement,
     BarController, // Register the controller for "bar" charts
     BarElement,
     Legend
   )

   export default ChartJS