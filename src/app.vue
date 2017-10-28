<template>
  <div id="app">
    <div class="app__wrapper">
      <top></top>
      <about></about>
      <paradox></paradox>
      <mile :mile="mile" :visible="visible"></mile>
      <heroes :heroes="heroes"></heroes>
      <bonuses :visible="visible" :direction="direction" :distance="distance"></bonuses>
      <hero-card :hero="heroes.igor"></hero-card>
      <igor-story :setVisible="setVisible" :setInvisible="setInvisible" :setMile="setMile"></igor-story>
      <hero-stat :hero="heroes.igor"></hero-stat>
      <hero-card :hero="heroes.boris"></hero-card>
      <boris-story :setVisible="setVisible" :setInvisible="setInvisible" :setMile="setMile"></boris-story>
      <hero-stat :hero="heroes.boris"></hero-stat>
      <hero-card :hero="heroes.alex"></hero-card>
      <alex-story :setVisible="setVisible" :setInvisible="setInvisible" :setMile="setMile"></alex-story>
      <hero-stat :hero="heroes.alex"></hero-stat>
      <foot></foot>
    </div>
  </div>
</template>

<script src="./app.js"></script>

<style lang="scss" src="./app.scss"></style>
