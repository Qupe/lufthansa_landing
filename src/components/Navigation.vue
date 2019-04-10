<template>
  <nav
    class="navigation"
    :class="{'navigation_fixed': fixed}"
  >
    <a
      v-for="hero of $store.state.heroes"
      :key="hero.alias"
      class="navigation__link"
      :href="'#'+hero.alias"
    >
      {{ hero.name | stripTag }}
    </a>
    <a
      class="navigation__link"
      href="#about"
      @click="showAbout"
    >
      О Lufthansa
    </a>
  </nav>
</template>

<script>
import scroll from 'zenscroll'
import { stripTag } from '../helpers'

const SCROLLED_TO_FIX = 102

export default {
  name: 'Navigation',
  filters: { stripTag },
  computed: {
    fixed () {
      return this.$store.state.scrolledTop >= SCROLLED_TO_FIX
    }
  },
  methods: {
    showAbout () {
      this.$store.commit('setSlideAboutVisibility', true)
      scroll.toY(this.$store.state.slideHeight)
    }
  }
}
</script>

<style lang="scss">
  .navigation {
    display: table;
    width: 100%;
    margin: auto;
    background: #fff;
    z-index: 999;

    .active {
      background: $brand-yellow;
    }

    &_fixed {
      max-width: 1005px;
      position: fixed;
      top: 0;
      z-index: 100;
      border: 1px solid #ccc;
      border-top: 0;
    }

    .navigation__link {
      display: table-cell;
      text-align: center;
      border-right: 1px solid #cecece;
      color: #000066;
      text-decoration: none;
      font-size: 13px;
      padding: 7px 0;
      font-family: "HelveticaDLHCGH-Roman", Arial, Helvetica, sans-serif;

      &:hover {
        background: $brand-yellow;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
</style>
