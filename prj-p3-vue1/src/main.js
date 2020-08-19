import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueCookies from 'vue-cookies'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const opts = { }
Vue.use(Vuetify)
Vue.use(VueCookies)

Vue.config.productionTip = false
window.$ = window.jQuery = require('jquery');
new Vue({
  store,
  router,
  vuetify: new Vuetify(opts),
  render: h => h(App)
}).$mount('#app')
