import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.config.productionTip = false
window.$ = window.jQuery = require('jquery');
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
