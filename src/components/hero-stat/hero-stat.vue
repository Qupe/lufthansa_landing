<template>
  <div class="hero-stat section" :data-anchor="hero.alias + '-stat'">
    <div class="step__miles-and-more text-center">
      <img class="step__miles-and-more-logo" src="../../assets/miles-and-more-logo.svg" alt=""/>
    </div>
    <div class="hero-stat__hero">
      <div class="container">
        <div class="grid">
          <div class="hero-stat__hero-name span-12 text-center">{{ hero.name | stripTag }}</div>
          <div :class="'hero-stat__title span-' + hero.accumulate.length * 2">Накапливает:</div>
          <div :class="'hero-stat__title span-' + hero.spend.length * 2">Тратит:</div>
          <div class="span-2 hero-stat__item" v-for="(item, index) of hero.accumulate" :key="index">
            <img class="hero-stat__item-icon" :src="item.icon" alt=""/>
            <div class="hero-stat__item-count" v-if="item.count">{{ item.count + ' миль' }}</div>
            <div class="hero-stat__item-reason" v-html="item.reason"></div>
          </div>
          <div class="span-2 hero-stat__item" v-for="(item, index) of hero.spend" :key="index">
            <img class="hero-stat__item-icon" :src="item.icon" alt=""/>
            <div class="hero-stat__item-count" v-if="item.count">{{ item.count + ' миль' }}</div>
            <div class="hero-stat__item-reason" v-html="item.reason"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import stripTag from '../../filters/stripTag'

  export default {
    props: ['hero'],
    name: 'hero-stat',
    filters: {stripTag}
  }
</script>

<style lang="scss" src="./hero-stat.scss"></style>
