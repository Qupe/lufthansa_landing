<template>
  <div class="top section" data-anchor="top">
    <div class="top__header">
      <div class="container">
        <div class="grid">
          <div class="span-12">
            <div class="top__header-brands">
              <div class="top__header-brands-logo text-left">
                <a href="http://www.forbes.ru" target="_blank">
                  <img class="top__header-brands-logo-forbes" src="../../assets/forbes-logo.svg" alt="">
                </a>
              </div>
              <div class="top__header-brands-logo text-center">
                <a href="http://www.miles-and-more.com/online/portal/mam/rowr/homepage?l=ru&cid=10001" target="_blank">
                  <img class="top__header-brands-logo-miles" src="../../assets/miles-and-more-logo.svg" alt="">
                </a>
              </div>
              <div class="top__header-brands-logo text-right">
                <a href="https://www.lufthansa.com/online/portal/lh/ru/homepage" target="_blank">
                  <img class="top__header-brands-logo-lufthansa" src="../../assets/lufthansa-logo.svg" alt="">
                </a>
              </div>
            </div>
          </div>
          <div class="span-12">
            <navigation :fixed="fixed"></navigation>
            <v-waypoint @waypoint="fixStart"></v-waypoint>
          </div>
        </div>
      </div>
    </div>
    <div class="top__text">
      <div class="container">
        <div class="grid">
          <div class="span-10 offset-2">
            <h1 class="top__text-title">Небо<br/>привилегий</h1>
            <p class="top__text-annotation">Как получать мили практически за всё<br/>и летать бесплатно</p>
          </div>
        </div>
      </div>
    </div>
    <div class="top__overlay"></div>
    <video ref="video" class="top__video" loop v-on:canplay="playVideo()">
      <source src="./top-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
  import Navigation from '../navigation/navigation.vue'

  export default {
    name: 'top',
    components: {Navigation},
    data () {
      return {
        fixed: false
      }
    },
    methods: {
      playVideo () {
        this.$refs.video.play()
      },
      fixStart (direction, going) {
        if (direction.y === 'down' && going === 'out') {
          this.fixed = true
        } else if (direction.y === 'up' && going === 'in') {
          this.fixed = false
        }
      }
    },
    mounted () {
      this.$root.$on('slide-leave', (index, nextIndex) => {
        if (nextIndex === 1) {
          this.playVideo()
        }
      })
    }
  }
</script>

<style lang="scss" src="./top.scss"></style>
