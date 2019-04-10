<template>
  <div
    class="paradox section"
    :style="{height: $store.state.slideHeight + 'px'}"
  >
    <div class="paradox__overlay" data-aos="fade-up" ref="paradoxText">
      <div class="paradox__text">
        <div class="container">
          <div class="grid">
            <div class="span-10 offset-2">
              <div class="paradox__text-title">
                Парадокс полёта:<br>пока мили не разлучат вас
              </div>
              <div class="paradox__text-annotation">
                Как жить в постоянных перелётах и при этом не отказывать себе ни в чём? Три героя —<br>
                музыкант, лингвист и технологический предприниматель — расскажут, как они планируют<br>
                путешествия, совмещают работу с отдыхом и превращают мили в привилегии и эксклюзивные<br>
                предложения. Читайте далее, чтобы познакомиться с теми, кто берёт от путешествий максимум.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paradox'
}
</script>

<style lang="scss">
  .paradox {
    background: url("../assets/paradox/paradox-background.jpg") no-repeat center;
    background-size: cover;
    position: relative;

    &__overlay {
      background: rgba($brand-yellow, 0.9);
      padding-top: 27px;
      padding-bottom: 35px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }

    &__text {
      &-title {
        font-size: 45px;
        line-height: 40px;
        margin-bottom: 28px;
        color: #ffffff;
        font-family: 'AkzidenzGroteskPro-Bold', Arial, Helvetica, sans-serif;
      }

      &-annotation {
        font-size: 16px;
        line-height: 1.2;
        font-family: 'Lora-Regular', Arial, Helvetica, sans-serif;
      }
    }
  }

</style>
