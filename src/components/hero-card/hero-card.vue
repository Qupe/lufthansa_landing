<template>
  <div :class="'hero-card hero-card_' + hero.alias + ' section'" :data-anchor="hero.alias + '-card'">
    <div class="hero-card__overlay"></div>
    <div class="hero-card__text">
    <div class="container">
      <div class="grid">
        <div class="span-10 offset-2">
          <div class="hero-card__text-name" v-html="hero.name"></div>
          <div class="hero-card__text-job">{{ hero.job }}</div>
          <div class="hero-card__text-annotation" v-html="hero.annotation"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: ['hero'],
    name: 'hero-card'
  }
</script>

<style lang="scss" src="./hero-card.scss"></style>
