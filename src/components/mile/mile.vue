<template>
  <div class="mile animated" :class="{fadeOutRightBig: !visible, fadeInRightBig: visible}">
    <div class="mile__count">{{ mile.count }}</div>
    <div class="mile__unit">миль</div>
    <div class="mile__route">{{ mile.route }}</div>
  </div>
</template>

<script>
  export default {
    name: 'mile',
    props: ['mile', 'visible']
  }
</script>

<style lang="scss" src="./mile.scss"></style>
