<template>
  <div
    class="top section"
    data-anchor="top"
    :style="{height: $store.state.slideHeight + 'px'}"
  >
    <div class="top__header">
      <div class="container">
        <div class="grid">
          <div class="span-12">
            <div class="top__header-brands">
              <div class="top__header-brands-logo text-left">
                <a
                  href="http://www.forbes.ru"
                  target="_blank"
                >
                  <img
                    class="top__header-brands-logo-forbes"
                    src="@/assets/forbes-logo.svg"
                    alt=""
                  >
                </a>
              </div>
              <div class="top__header-brands-logo text-center">
                <a
                  href="http://www.miles-and-more.com/online/portal/mam/rowr/homepage?l=ru&cid=10001"
                  target="_blank"
                >
                  <img
                    class="top__header-brands-logo-miles"
                    src="@/assets/miles-and-more-logo.svg"
                    alt=""
                  >
                </a>
              </div>
              <div class="top__header-brands-logo text-right">
                <a
                  href="https://www.lufthansa.com/online/portal/lh/ru/homepage"
                  target="_blank"
                >
                  <img
                    class="top__header-brands-logo-lufthansa"
                    src="@/assets/lufthansa-logo.svg"
                    alt=""
                  >
                </a>
                <small>Партнерский проект*</small>
              </div>
            </div>
          </div>
          <div class="span-12">
            <navigation/>
          </div>
        </div>
      </div>
    </div>
    <div class="top__text" ref="topText" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
      <div class="container">
        <div class="grid">
          <div class="span-10 offset-2">
            <h1 class="top__text-title">
              Небо<br>привилегий
            </h1>
            <p class="top__text-annotation">
              Как получать мили практически за всё<br>и летать бесплатно
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="top__overlay"></div>
    <video
      muted="muted"
      ref="topVideo"
      class="top__video"
      preload="none"
      src="@/assets/top/top-video.mp4"
      loop
    >
    </video>
  </div>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'Top',
  components: { Navigation },
  data () {
    return {
      fixed: false,
      videoSrc: undefined
    }
  },
  mounted () {
    let playPromise = this.$refs.topVideo.play()

    if (playPromise !== undefined) {
      playPromise.then().catch(error => {
        throw new Error(error)
      })
    }
  }
}
</script>

<style lang="scss">
  .top {
    position: relative;
    overflow: hidden;
    z-index: 10;

    &__overlay {
      background: rgba(#494747, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      z-index: -1;
    }

    &__video {
      position: absolute;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -2;
      overflow: hidden;
      background-size: cover;
      object-fit: fill;
    }

    &__header {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;

      &-brands {
        background: #fff;
        box-sizing: border-box;
        margin: 24px auto 0;
        display: table;
        width: 100%;

        &-logo {
          vertical-align: middle;
          display: table-cell;
          padding: 15px;
          box-sizing: border-box;
          width: 33%;

          &-forbes {
            width: 100px;
          }

          &-miles {
            width: 150px;
          }

          &-lufthansa {
            width: 186px;
          }
        }
      }
    }

    &__text {
      position: absolute;
      bottom: 95px;
      right: 0;
      left: 0;

      &-title {
        font-size: 70px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 16px;
        font-family: 'AkzidenzGroteskPro-Super', Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        line-height: 0.9;
      }

      &-annotation {
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        margin: 0;
        font-family: 'AkzidenzGroteskPro-Bold', Arial, Helvetica, sans-serif;
      }
    }
  }

</style>
