import Vue from 'vue'
import App from './components/App'
import Store from './store'
import Scroll from 'zenscroll'
import Aos from 'aos'
import VueWaypoint from 'vue-waypoint'

Vue.config.productionTip = false
Vue.use(VueWaypoint)

new Vue({
  store: Store,
  created () {
    Aos.init({
      offset: 100,
      easing: 'ease-in-out-quart',
      delay: 50
    })

    Scroll.setup(null, 0)

    this.$store.commit('setSlideHeight', window.innerHeight)

    window.addEventListener('resize', event => {
      this.$store.commit('setSlideHeight', event.target.innerHeight)
      Aos.refresh()
    })

    document.addEventListener('scroll', () => {
      this.$store.commit('setScrolledTop', Scroll.getY())
    }, false)
  },
  render: h => h(App)
}).$mount('#app')
