<template>
  <div class="heroes section" data-anchor="heroes">
    <div class="container">
      <div class="grid">
        <div class="hero span-4" v-for="(hero, key) in heroes" :key="key">
          <a :href="'#' + hero.alias + '-card'">
            <img class="hero__avatar" :src="hero.avatar" alt=""/>
          </a>
          <div class="hero__name">{{ hero.name | stripTag }}</div>
          <div class="hero__job">{{ hero.job }}</div>
          <blockquote v-html="hero.quote" class="hero__quote"></blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import stripTag from '../../filters/stripTag'

  export default {
    name: 'heroes',
    props: ['heroes'],
    filters: {stripTag}
  }
</script>

<style lang="scss" src="./heroes.scss"></style>
