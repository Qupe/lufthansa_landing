import Vue from 'vue'
import App from './app.vue'
import VueWaypoint from 'vue-waypoint'

Vue.use(VueWaypoint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
