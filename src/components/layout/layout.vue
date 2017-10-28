<template>
  <div class="app__wrapper">
    <first-step></first-step>
    <about></about>
    <second-step></second-step>
    <third-step></third-step>
    <bonuses></bonuses>
    <hero-card :hero="heroes.igor"></hero-card>
    <igor-story></igor-story>
    <hero-stat :hero="heroes.igor"></hero-stat>
    <hero-card :hero="heroes.boris"></hero-card>
    <boris-story></boris-story>
    <hero-stat :hero="heroes.boris"></hero-stat>
    <hero-card :hero="heroes.alex"></hero-card>
    <alex-story></alex-story>
    <hero-stat :hero="heroes.alex"></hero-stat>
    <foot></foot>
  </div>
</template>

<script src="./layout.js"></script>
