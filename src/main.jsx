import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './assets/vendor/aos/aos.js'
import './assets/vendor/typed.js/typed.umd.js'
import './assets/vendor/purecounter/purecounter_vanilla.js'
import './assets/vendor/waypoints/noframework.waypoints.js'
import './assets/vendor/glightbox/js/glightbox.min.js'
import './assets/vendor/imagesloaded/imagesloaded.pkgd.min.js'
import './assets/vendor/isotope-layout/isotope.pkgd.min.js'
import './assets/vendor/swiper/swiper-bundle.min.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
