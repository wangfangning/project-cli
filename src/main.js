import Vue from 'vue'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import axios from './assets/api'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/css/index.scss'

Vue.use(VCharts)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 }).use(axios, store)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
