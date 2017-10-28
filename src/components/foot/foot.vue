<template>
  <div class="footer section fp-auto-height" data-anchor="footer">
    <div class="container">
      <div class="grid">
        <div class="span-12 text-right">
          <a
            href="http://www.lufthansa.com/ru/ru/Help-and-Contact?displayAll=true&contactChannelIndex=0&sourceTaxonomy=Homepage2014"
            target="_blank">Контактная информация</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Lufthansa в социальных сетях
          <div class="footer__links">
            <a class="footer__link" target="_blank" href="https://www.facebook.com/Lufthansa/">
              <img class="footer__link-facebook" src="./foot-facebook.svg" alt=""/>
            </a>
            <a class="footer__link" target="_blank" href="https://www.youtube.com/user/Lufthansa/">
              <img class="footer__link-youtube" src="./foot-youtube.svg" alt=""/>
            </a>
            <a class="footer__link" target="_blank" href="https://www.instagram.com/lufthansa/">
              <img class="footer__link-instagram" src="./foot-instagram.svg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foot'
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .footer {
    background: $brand-yellow;
    color: $brand-blue;
    padding-top: 28px;
    padding-bottom: 30px;
    font-family: "HelveticaDLHCGH-Roman", Arial, Helvetica, sans-serif;

    &__links {
      display: inline-block;
    }

    &__link {
      display: inline-block;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      vertical-align: middle;
      margin-left: 10px;
      background: $brand-blue;
      text-align: center;

      &:first-child {
        background: none;
      }

      &-facebook {
        width: 23px;
      }

      &-youtube {
        width: 10px;
        vertical-align: middle;
      }

      &-instagram {
        width: 13px;
        vertical-align: bottom;
      }
    }

    a {
      color: inherit;
    }
  }
</style>
