<template>
  <div id="app">
    <div class="app__wrapper">
      <top/>
      <about/>
      <paradox/>
      <heroes/>
      <mile v-if="$store.state.bonusesVisibility"/>
      <bonuses v-if="$store.state.bonusesVisibility"/>
      <hero-card :hero="$store.state.heroes.igor"/>
      <igor-story/>
      <hero-stat :hero="$store.state.heroes.igor"/>
      <hero-card :hero="$store.state.heroes.boris"/>
      <boris-story/>
      <hero-stat :hero="$store.state.heroes.boris"/>
      <hero-card :hero="$store.state.heroes.alex"/>
      <alex-story/>
      <hero-stat :hero="$store.state.heroes.alex"/>
      <foot/>
    </div>
  </div>
</template>

<script>
import Top from './Top'
import About from './About'
import Paradox from './Paradox'
import Heroes from './Heroes'
import HeroCard from './HeroCard'
import HeroStat from './HeroStat'
import Bonuses from './Bonuses'
import BorisStory from './BorisStory'
import IgorStory from './IgorStory'
import AlexStory from './AlexStory'
import Foot from './Foot'
import Mile from './Mile'

export default {
  name: 'App',
  components: {
    Top,
    About,
    Paradox,
    AlexStory,
    IgorStory,
    BorisStory,
    Bonuses,
    HeroCard,
    HeroStat,
    Heroes,
    Foot,
    Mile
  }
}
</script>

<style lang="scss">
  @import "~normalize.css";
  @import "~aos/dist/aos.css";
  @import "../styles/variables";
  @import "../styles/fonts";
  @import "../styles/helpers";
  @import "../styles/grid";
  @import "../styles/typography";

  body {
    scroll-behavior: smooth
  }

  #app {
    overflow: hidden;
  }
</style>
