<template>
  <div class="mile" data-aos="fade-left">
    <div class="mile__count">
      {{ $store.state.mile.count }}
    </div>
    <div class="mile__unit">
      миль
    </div>
    <div class="mile__route">
      {{ $store.state.mile.route }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mile'
}
</script>

<style lang="scss">
  .mile {
    display: inline-block;
    color: $brand-gray;
    text-align: center;
    font-family: 'Lora-Regular', Arial, Helvetica, sans-serif;
    max-width: 180px;
    width: 100%;
    position: fixed;
    top: calc(50% - 140px);
    right: 10px;
    z-index: 10;

    &_visible {
      opacity: 1;
    }

    &__count {
      font-size: 50px;
    }

    &__unit {
      font-size: 14px;
      text-transform: uppercase;
      border-bottom: 1px solid;
      padding-bottom: 11px;
      margin-bottom: 9px;
    }

    &__route {
      font-size: 14px;
    }
  }
</style>
