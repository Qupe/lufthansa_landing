<template>
  <div class="bonuses" data-aos="fade-up">
    <div class="bonuses__descriptions">
      <transition name="fade" mode="out-in" v-for="(bonus, index) of bonuses" :key="index">
        <div class="bonuses__descriptions-item" v-if="bonus.active">
          <div class="container">
            <div class="grid">
              <div class="span-12">
                <div class="bonuses__descriptions-item-head">
                  <img
                    :src="bonus.active ? bonus.icon[1] : bonus.icon[0]"
                    class="bonuses__descriptions-item-icon"
                    :alt="bonus.name"
                  >
                  {{ bonus.name }}
                  <i
                    class="bonuses__descriptions-item-close"
                    @click="setUnactive(index)"
                  >&times;</i>
                </div>
                <div
                  class="bonuses__descriptions-item-text"
                  v-html="bonus.description"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="bonuses__list">
      <div class="container">
        <div class="grid">
          <div class="span-2">
            <img
              src="../assets/lufthansa-logo.svg"
              alt="lufthansa-logo"
              width="135"
              class="bonuses__lufthansa-logo"
            >
          </div>
          <div class="span-8 text-center">
            <!--<img
              ref="airplane"
              src="../assets/bonuses/bonuses-airplane.svg"
              class="bonuses__list-airplane animated"
              :class="{'bonuses__list-airplane_reverted': !$store.state.direction}"
              :style="{left: distance + '%', transition: 'all 0.5s linear'}"
              alt=""
            >-->
            <div
              class="bonuses__list-bar"
              :class="{'bonuses__list-bar_finished': finished}"></div>
            <div
              class="bonuses__list-seek"
              :style="{width: distance + '%', transition: 'all 0.5s linear'}"></div>
            <div
              v-for="(bonus, index) of bonuses"
              :key="index"
              class="bonuses__list-item"
              :class="{'bonuses__list-item_active': bonus.active || bonus.reached }"
              @click="setActive(index)"
            >
              <img
                :src="bonus.active || bonus.reached ? bonus.icon[1] : bonus.icon[0]"
                class="bonuses__list-item-icon"
                :alt="bonus.name"
              >
            </div>
          </div>
          <div class="span-2 text-right">
            <img
              src="../assets/miles-and-more-logo.svg"
              alt=""
              width="120"
              class="bonuses__miles-and-more-logo"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'bonuses',
  methods: {
    setActive (index) {
      this.bonuses.forEach((item, i) => {
        if (index === i) {
          this.bonuses[index].active = true
        } else {
          this.bonuses[i].active = false
        }
      })
    },
    setUnactive (index) {
      this.bonuses[index].active = false
    }
  },
  computed: mapState(['distance']),
  watch: {
    distance (distance) {
      distance = Math.round(distance)
      if (distance === 96) {
        setTimeout(() => {
          this.finished = true
        }, 500)
      } else {
        setTimeout(() => {
          this.finished = false
        }, 500)
      }
      this.bonuses.forEach((item, index) => {
        if (item.point <= distance) {
          item.reached = true
          this.setActive(index)
        } else {
          item.reached = false
          item.active = false
        }
      })
    }
  },
  data () {
    return {
      finished: false,
      bonuses: [
        {
          icon: [
            require('../assets/bonuses/bonuses-aviaperelet.svg'),
            require('../assets/bonuses/bonuses-aviaperelet_active.svg')
          ],
          name: 'Авиаперелеты',
          active: false,
          reached: false,
          point: 12,
          description: '<p><b>Не летайте впустую — копите мили</b>. Полёты с Lufthansa и остальными 28 авиакомпаниями ' +
            'альянса Star Alliance приносят вам премиальные мили, которые можно обменять на будущие полёты. Покупки в ' +
            'аэропортах и на борту тоже становятся выгодными, ведь за них вам причитаются бонусы.</p>' +
            '<p><b>Ваш следующий полёт может стать бесплатным.</b> Используйте накопленные мили, чтобы купить свой ' +
            'следующий билет или оплатить его часть с опцией Cash & Miles. Бронь премиальных билетов на рейсы ' +
            'множества авиакомпаний-партнёров программы Miles & More доступна онлайн на сайте LH.com</p>'
        },
        {
          icon: [
            require('../assets/bonuses/bonuses-hotels.svg'),
            require('../assets/bonuses/bonuses-hotels_active.svg')
          ],
          name: 'Отели',
          active: false,
          reached: false,
          point: 24,
          description: '<p><b>Бонусы приходят, пока вы спите.</b> Устали во время перелёта? Отдохните в одном из ' +
            '200 000 отелей от трёх звезд и выше по всему миру. <b>При бронировании отеля на портале Miles & More Hotels</b> ' +
            'вы получите не менее 1000 миль за каждую ночь, при условии, что бронирование реализовано. <b>Мили превращаются ' +
            'в ночи</b> Если у вас уже достаточно миль, потратьте их на проживание в любой точке мира. Забронировать отель ' +
            'на сайте Miles & More легко и просто.</p>'
        },
        {
          icon: [
            require('../assets/bonuses/bonuses-prokat-avto.svg'),
            require('../assets/bonuses/bonuses-prokat-avto_active.svg')
          ],
          name: 'Прокат автомобилей',
          active: false,
          reached: false,
          point: 36,
          description: '<p><b>Мили в небе и на земле.</b> Аренда автомобилей позволяет копить мили так же, как во ' +
            'время полёта. Возьмите автомобиль в прокат и получите от 500 миль.</p> <p><b>Аренда автомобилей любого уровня за ' +
            'премиальные мили.</b> Выбирайте машину на свой вкус у одной из девяти международных компаний. Вы сможете ' +
            'оплатить бронь  онлайн милями, накопленными в полёте или у партнёров программы на земле.</p>'
        },
        {
          icon: [
            require('../assets/bonuses/bonuses-bank-card.svg'),
            require('../assets/bonuses/bonuses-bank-card_active.svg')
          ],
          name: 'Банковские карты «Miles & More»',
          active: false,
          reached: false,
          point: 48,
          description: '<p><b>Бонусы по банковским картам.</b> Источник миль — уже у вас в кармане. Накапливайте ' +
            'премиальные мили, совершая покупки по карте одного из банков-партнёров.</p>'
        },
        {
          icon: [
            require('../assets/bonuses/bonuses-shopping.svg'),
            require('../assets/bonuses/bonuses-shopping_active.svg')
          ],
          name: 'Шопинг',
          active: false,
          reached: false,
          point: 60,
          description: '<p><b>Наслаждайтесь шоппингом и летайте бесплатно.</b> Готовитесь к приключениям? Купите всё ' +
            'необходимое для поездки в одном из магазинов-партнёров и копите премиальные мили быстрее. В среднем, вы ' +
            'получаете одну милю за каждый потраченный евро при покупке в сетях международных шопинг-партнеров.</p>' +
            '<p><b>Расплачивайтесь милями за покупки.</b> Вам понравится шоппинг без трат! В ряде магазинов партнеровов, а также ' +
            'магазинах аэропортов вы сможете платить милями за любые товары. Просто предъявите карту карту Miles & More ' +
            'или откройте её дубликат в мобильном приложении.</p>'
        },
        {
          icon: [
            require('../assets/bonuses/bonuses-shopping-airport.svg'),
            require('../assets/bonuses/bonuses-shopping-airport_active.svg')
          ],
          name: 'Покупки в аэропорту',
          active: false,
          reached: false,
          point: 65,
          description: '<p><b>Шоппинг начинается с аэропорта.</b> В Lufthansa WorldShop и магазинах беспошлинной ' +
            'торговли Вы найдёте товары для беззаботного путешествия. Начните копить мили ещё до взлёта.</p> <p><b>Роскошь и ' +
            'удовольствие – за премиальные мили!</b> Обменивайте премиальные мили на покупку товаров в европейских ' +
            'аэропортах, где есть магазины-партнёры программы. Вы можете расплатиться за покупки милями, евро или ' +
            'сочетанием миль и евро.</p>'
        },
        {
          icon: [
            require('../assets/bonuses/bonuses-charity.svg'),
            require('../assets/bonuses/bonuses-charity_active.svg')
          ],
          name: 'Мили на благотворительность',
          active: false,
          reached: false,
          point: 77,
          description: '<p><b>Мили на благотворительность.</b> По всему миру люди ждут помощи. Вы можете повысить ' +
            'качество жизни нуждающихся. Переведите от 3000 до 50000 миль в общий фонд пожертвований или направьте ' +
            'мили на решение проблемы, которая волнует вас больше: образование, здоровье, работа или питание.</p>'
        },
        {
          icon: [
            require('../assets/bonuses/bonuses-seacruise.svg'),
            require('../assets/bonuses/bonuses-seacruise_active.svg')
          ],
          name: 'Мили за покупку круиза',
          active: false,
          reached: false,
          point: 89,
          description: '<p><b>Отдохните в круизном путешествии и заработайте мили.</b> Команда агентства ' +
            'Kreuzfahrten.de приготовит для вас незабываемое путешествие! Более 20000 вариантов круизов и множество ' +
            'эксклюзивных предложений ждут вас. Каждый потраченный евро принесёт одну премиальную милю.</p>'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .bonuses {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;

    &__lufthansa-logo {
      width: 120px;
      margin-top: 5px;
    }

    &__miles-and-more-logo {
      width: 120px;
      margin-top: 3px;
    }

    &__descriptions {

      &-item {
        padding-top: 12px;
        padding-bottom: 12px;
        background: #f4f4f4;
        position: absolute;
        bottom: 55px;
        right: 0;
        left: 0;

        &-head {
          font-size: 36px;
          color: $brand-yellow;
          font-family: "HelveticaDLHCGH-Roman", Arial, Helvetica, sans-serif;
          font-weight: bold;
          position: relative;
        }

        &-text {
          font-family: 'Lora-Regular', Arial, Helvetica, sans-serif;
          color: #333333;
          line-height: 1.4;
        }

        &-icon {
          position: relative;
          margin-right: 5px;
          top: 6px;
        }

        &-close {
          color: #979797;
          font-style: normal;
          font-family: Helvetica, sans-serif;
          right: 0;
          top: -4px;
          position: absolute;
          font-weight: 100;
          cursor: pointer;
        }
      }
    }

    &__list {
      padding-top: 10px;
      padding-bottom: 10px;
      position: relative;
      text-align: center;
      background: #ebebeb;

      &-airplane {
        width: 32px;
        height: 31px;
        position: absolute;
        left: 10px;
        z-index: 5;
        top: 2px;
        transition: transform 1s;

        &_reverted {
          transform: scaleX(-1)
        }
      }

      &-bar {
        position: absolute;
        top: 16px;
        left: 0;
        height: 1px;
        border-bottom: 1px dotted #808080;
        width: 100%;
        z-index: 0;

        &:before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 2px solid $brand-yellow;
          position: absolute;
          left: -10px;
          background: #ebebeb;
          top: -4px;
        }

        &:after {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 2px solid #808080;
          position: absolute;
          right: -10px;
          background: #ebebeb;
          top: -4px;
        }

        &_finished {
          &:after {
            border: 2px solid $brand-yellow;
          }
        }
      }

      &-seek {
        position: absolute;
        top: 16px;
        left: 0;
        height: 1px;
        border-bottom: 1px solid $brand-yellow;
        width: 0;
        z-index: 1;
        /*max-width: 673px;*/
      }

      &-item {
        display: inline-block;
        border-radius: 50%;
        background: #ffffff;
        position: relative;
        z-index: 1;
        margin: 0 20px;

        &_active {
          background: $brand-yellow;
        }

        &-icon {
          width: 25px;
          padding: 5px;
          vertical-align: top;
          cursor: pointer;
        }
      }
    }
  }
</style>
