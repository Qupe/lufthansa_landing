<template>
  <div
    class="heroes section"
    data-anchor="heroes"
    :style="{height: $store.state.slideHeight + 'px'}"
  >
    <div class="heroes__middleware">
      <div class="container">
      <div class="grid" ref="heroes" data-aos="zoom-out-down" data-aos-anchor-placement="top-bottom">
        <div
          v-for="(hero) in $store.state.heroes"
          :key="hero.name"
          class="hero span-4"
        >
          <a :href="'#' + hero.alias">
            <img
              class="hero__avatar"
              :src="hero.avatar"
              alt=""
            >
          </a>
          <div class="hero__name">
            {{ hero.name | stripTag }}
          </div>
          <div class="hero__job">
            {{ hero.job }}
          </div>
          <blockquote
            class="hero__quote"
            v-html="hero.quote">
          </blockquote>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { stripTag } from '../helpers'

export default {
  name: 'Heroes',
  filters: { stripTag }
}
</script>

<style lang="scss">
  .heroes {
    height: 660px;
    background: $brand-yellow;
    position: relative;
    vertical-align: middle;
    text-align: center;

    &__middleware {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .hero {
    text-align: center;

    &__avatar {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      border: 3px solid $brand-yellow;
      box-shadow: 0 0 0 3px #ffffff;
      margin-bottom: 16px;
    }

    &__name {
      font-size: 24px;
      font-weight: bold;
      color: $brand-blue;
      margin-bottom: 6px;
      font-family: 'AkzidenzGroteskPro-Bold', Arial, Helvetica, sans-serif;
    }

    &__job {
      font-size: 14px;
      color: $brand-black;
      margin-bottom: 58px;
      font-family: 'Lora-Regular', Arial, Helvetica, sans-serif;
    }

    &__quote {
      font-size: 16px;
      line-height: 1.2;
      color: $brand-black;
      font-family: 'Lora-Regular', Arial, Helvetica, sans-serif;
      margin: 0;

      span {
        position: relative;

        &:before {
          content: '';
          display: block;
          width: 22px;
          height: 15px;
          background: url('../assets/quote-left.svg') no-repeat center;
          position: absolute;
          left: -30px;
          top: 4px;
        }

        &:after {
          content: '';
          display: block;
          width: 22px;
          height: 15px;
          background: url('../assets/quote-right.svg') no-repeat center;
          position: absolute;
          top: 4px;
          right: -30px;
        }
      }
    }
  }

</style>
