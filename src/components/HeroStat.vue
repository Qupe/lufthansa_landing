<template>
  <div
    class="hero-stat section"
    :style="{height: $store.state.slideHeight + 'px'}"
  >
    <div class="step__miles-and-more text-center" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
      <img
        class="step__miles-and-more-logo"
        src="../assets/miles-and-more-logo.svg"
        alt=""
      >
    </div>
    <div class="hero-stat__hero">
      <div class="container">
        <div class="grid">
          <div class="hero-stat__hero-name span-12 text-center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
            {{ hero.name | stripTag }}
          </div>
          <div :class="'span-' + hero.accumulate.length * 2" data-aos="fade-right">
            <div class="hero-stat__title ">Накапливает:</div>
            <div
              v-for="item of hero.accumulate"
              :key="item.count"
              :class="'span-' + 12 / hero.accumulate.length + ' hero-stat__item'"
            >
              <img
                class="hero-stat__item-icon"
                :src="item.icon"
                alt=""
              >
              <div
                v-if="item.count"
                class="hero-stat__item-count"
              >
                {{ item.count + ' миль' }}
              </div>
              <div
                class="hero-stat__item-reason"
                v-html="item.reason"></div>
            </div>
          </div>
          <div :class="'span-' + hero.spend.length * 2" data-aos="fade-left">
            <div class="hero-stat__title">Тратит:</div>
            <div
              v-for="(item, index) of hero.spend"
              :key="index"
              :class="'span-' + 12 / hero.spend.length + ' hero-stat__item'"
            >
              <img
                class="hero-stat__item-icon"
                :src="item.icon"
                alt=""
              >
              <div
                v-if="item.count"
                class="hero-stat__item-count"
              >
                {{ item.count + ' миль' }}
              </div>
              <div
                class="hero-stat__item-reason"
                v-html="item.reason"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stripTag } from '../helpers'

export default {
  name: 'HeroStat',
  filters: { stripTag },
  props: ['hero']
}
</script>

<style lang="scss">
  .hero-stat {
    background: url('../assets/stat/hero-stat.jpg') no-repeat center;
    background-size: cover;
    position: relative;
    height: 810px;

    &__hero {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      &-name {
        font-size: 60px;
        line-height: 0.9;
        font-weight: bold;
        color: $brand-blue;
        margin-bottom: 40px;
        text-transform: uppercase;
        font-family: 'AkzidenzGroteskPro-Super', Arial, Helvetica, sans-serif;
      }
    }

    &__title {
      font-size: 20px;
      font-weight: bold;
      color: $brand-blue;
      text-transform: uppercase;
      margin-bottom: 25px;
      font-family: 'AkzidenzGroteskPro-Bold', Arial, Helvetica, sans-serif;
    }

    &__item {
      color: $brand-blue;
      position: relative;
      margin-bottom: 40px;

      &-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
      }

      &-count {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 7px;
        font-family: 'AkzidenzGroteskPro-Super', Arial, Helvetica, sans-serif;
      }

      &-reason {
        font-size: 16px;
        font-family: 'AkzidenzGroteskPro-Regular', Arial, Helvetica, sans-serif;
      }
    }

    &__block {
      position: relative;
      margin-bottom: 22px;

      &:first-child:after {
        content: '';
        display: block;
        border: 1px solid #8b8f93;
        position: absolute;
        right: -5px;
        top: 0;
      }

      &-items {
        display: table;
        width: 100%;
      }
    }
  }

  .step {
    &__miles-and-more {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;

    }

    &__miles-and-more-logo {
      width: 460px;
    }
  }
</style>
