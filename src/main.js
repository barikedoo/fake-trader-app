import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import { routes } from './routes'

import store from './components/store/store'

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter(
  {
    mode:'history',
    routes
  }
)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
