import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// Import Bootstrap
import { BootstrapVue, IconsPlugin, BDropdown, BDropdownItem } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Import MDB
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from 'mdbvue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
// Import iconify
import { Icon } from '@iconify/vue2'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// use BDropdown as a component
Vue.component('b-dropdown', BDropdown)
Vue.component('b-dropdown-item', BDropdownItem)
Vue.component('mdb-carousel', mdbCarousel)
Vue.component('mdb-carousel-item', mdbCarouselItem)
Vue.component('mdb-carousel-caption', mdbCarouselCaption)
Vue.component('Icon', Icon)
// Chart
// import { Bar } from 'vue-chartjs/legacy'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
