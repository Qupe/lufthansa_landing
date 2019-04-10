<template>
  <div
    :id="hero.alias"
    :class="'hero-card hero-card_' + hero.alias + ' section'"
    :style="{height: $store.state.slideHeight + 'px'}"
  >
    <div class="hero-card__overlay"></div>
    <div class="hero-card__text lax" :ref="'hero' + hero.alias + 'Text'" data-aos="fade-right">
      <div class="container">
        <div class="grid">
          <div class="span-9 offset-3">
            <div
              class="hero-card__text-name"
              v-html="hero.name"></div>
            <div class="hero-card__text-job">
              {{ hero.job }}
            </div>
            <div
              class="hero-card__text-annotation"
              v-html="hero.annotation"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scroll from 'zenscroll'

export default {
  name: 'HeroCard',
  props: ['hero'],
  mounted () {
    this.$root.$on('scrollToSection', value => {
      scroll.to(this.$refs['hero_' + value])
    })
  }
}
</script>

<style lang="scss">
  .hero-card {
    position: relative;

    &_igor {
      background: url('../assets/hero-igor/igor-background.jpg') no-repeat center;
      background-size: cover;
    }

    &_boris {
      background: url('../assets/hero-boris/boris-background.jpg') no-repeat center;
      background-size: cover;
    }

    &_alex {
      background: url('../assets/hero-alex/alex-background.jpg') no-repeat center;
      background-size: cover;
    }

    &__overlay {
      background: rgba(#232323, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }

    &__text {
      color: #ffffff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      padding-bottom: 40px;

      &-name {
        font-size: 60px;
        font-weight: bold;
        margin-bottom: 15px;
        font-family: 'AkzidenzGroteskPro-Super', Arial, Helvetica, sans-serif;
        text-transform: uppercase;
      }

      &-job {
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 31px;
        font-family: 'AkzidenzGroteskPro-Super', Arial, Helvetica, sans-serif;
      }

      &-annotation {
        font-size: 14px;
        line-height: 20px;
        font-family: 'Lora-Regular', Arial, Helvetica, sans-serif;
      }
    }
  }
</style>
