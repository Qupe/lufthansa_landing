<template>
  <nav class="navigation animated" :class="{'navigation_fixed': fixed, fadeInDownBig: fixed }">
    <a class="navigation__link" @click="showAbout(index)" :href="'#'+link.alias" v-for="(link, index) of links"
       :key="index" :data-menuanchor="link.alias">
      {{ link.name }}</a>
  </nav>
</template>

<script>
  export default {
    props: ['fixed'],
    name: 'navigation',
    methods: {
      showAbout (index) {
        this.$root.$emit('nav-click', index)
      }
    },
    data () {
      return {
        links: [
          {
            name: 'Игорь Найдин',
            alias: 'igor-card'
          },
          {
            name: 'Борис Жигалев',
            alias: 'boris-card'
          },
          {
            name: 'Алексей Мяков',
            alias: 'alex-card'
          },
          {
            name: 'О Lufthansa',
            alias: 'about'
          }
        ]
      }
    }
  }
</script>

<style scoped="true" lang="scss" src="./navigation.scss"></style>
