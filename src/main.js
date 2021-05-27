import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueNumericInput from 'vue-numeric-input';
import VueTyperPlugin from 'vue-typer'

// import confetti from 'canvas-confetti';

 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueNumericInput)
Vue.use(VueTyperPlugin)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
