import jQuery from 'jquery'
import 'fullpage.js'

import Top from './components/top/top.vue'
import Paradox from './components/paradox/paradox.vue'
import Heroes from './components/heroes/heroes.vue'
import HeroCard from './components/hero-card/hero-card.vue'
import HeroStat from './components/hero-stat/hero-stat.vue'
import Bonuses from './components/bonuses/bonuses.vue'
import BorisStory from './components/boris-story/boris-story.vue'
import About from './components/about/about.vue'
import IgorStory from './components/igor-story/igor-story.vue'
import AlexStory from './components/alex-story/alex-story.vue'
import Foot from './components/foot/foot.vue'
import Mile from './components/mile/mile.vue'

export default {
  name: 'app',
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
  },
  methods: {
    setVisible (direction, going) {
      if (direction.y === 'down' && going === 'in') {
        this.visible = true
      } else if (direction.y === 'up' && going === 'out') {
        this.visible = false
      }
    },
    setInvisible (direction, going) {
      if (direction.y === 'down' && going === 'in') {
        this.visible = false
      } else if (direction.y === 'up' && going === 'out') {
        this.visible = true
      }
    },
    setMile (direction, going, hero, index) {
      if (direction.y === 'down' && going === 'in') {
        this.direction = true
        this.distance += 4.55
        this.mile = this.heroes[hero].miles[index]
      } else if (direction.y === 'up' && going === 'out') {
        this.direction = false
        this.distance -= 4.55
        this.mile = this.heroes[hero].miles[index]
      }
    }
  },
  data () {
    return {
      visible: false,
      mile: {
        count: 0,
        route: ''
      },
      distance: 0,
      direction: true,
      index: 0,
      heroes: {
        igor: {
          avatar: require('./components/heroes/hero-igor.jpg'),
          name: 'Игорь<br/>Найдин',
          alias: 'igor',
          job: 'Альтист в квартете им. Бородина',
          quote: '<span>Я обожал летать на самолёте,</span><br/>ещё когда был маленьким. Любил,<br/>' +
          'когда самолёт<br/>подбрасывает в воздухе — чем<br/>сильней, тем лучше.',
          annotation: 'Музыка не знает границ, уверен Игорь Найдин. Международные конкурсы<br/>в свое время ' +
          'познакомили его с большей частью Европы, но артист привык искать<br/>вдохновение на всех континентах. ' +
          'Вместе с другими участниками квартета<br/>Владимиром Бальшиным, Сергеем Ломовским, Рубеном Агароняном они<br/>' +
          'гастролируют по всему миру и ищут вдохновение в каждом полёте.',
          accumulate: [
            {
              icon: require('./components/hero-stat/hero-stat-avto.svg'),
              count: 500,
              reason: 'Аренда машины'
            },
            {
              icon: require('./components/hero-stat/hero-stat-avia.svg'),
              count: 10000,
              reason: 'Авиаперелет<br/>Москва — Вена<br/>(+Executive Bonus)'
            },
            {
              icon: require('./components/hero-stat/hero-stat-shopping-airport.svg'),
              count: 200,
              reason: 'Покупки в аэропорту'
            },
            {
              icon: require('./components/hero-stat/hero-stat-shopping.svg'),
              count: 35,
              reason: 'Покупки на борту'
            }
          ],
          spend: [
            {
              icon: require('./components/hero-stat/hero-stat-first-class.svg'),
              count: 50000,
              reason: 'Повышение класса<br/>обслуживания'
            },
            {
              icon: require('./components/hero-stat/hero-stat-tiket.svg'),
              count: '',
              reason: 'Полная или<br/>частичная оплата<br/>авиабилетов'
            }
          ],
          miles: [
            {
              count: 0,
              route: ''
            },
            {
              count: 500,
              route: 'Машина в прокат'
            },
            {
              count: 2500,
              route: 'Бронь отеля'
            },
            {
              count: 2700,
              route: 'Покупки в аэропорту'
            },
            {
              count: 2735,
              route: 'Покупки на борту, например, 35 евро — 35 миль'
            },
            {
              count: 52735,
              route: 'Повышение класса до бизнес'
            },
            {
              count: 62735,
              route: 'Перелёт Москва — Вена — Москва'
            }
          ]
        },
        boris: {
          avatar: require('./components/heroes/hero-boris.jpg'),
          name: 'Борис<br/>Жигалёв',
          alias: 'boris',
          job: 'Ректор НГЛУ им. Н.А. Добролюбова',
          quote: '<span>Я люблю летать и предпочитаю</span><br/>самолёт другим видам<br/>транспорта, ' +
          'потому что это<br/>быстро и увлекательно.',
          annotation: 'Любовь к иностранным языкам открывает новые горизонты. Борис летает по всей Европе в поисках ' +
          'академического сотрудничества с другими университетами. Он уверен, что простого знания слов и ' +
          'грамматики мало — нужно тесно знакомиться с культурой страны.',
          accumulate: [
            {
              icon: require('./components/hero-stat/hero-stat-tiket.svg'),
              count: 88650,
              reason: 'Авиабилеты'
            },
            {
              icon: require('./components/hero-stat/hero-stat-citibank.svg'),
              count: 2800,
              reason: 'Оплата кредитной<br/>картой Ситибанка<br/>Miles & More'
            },
            {
              icon: require('./components/hero-stat/hero-stat-hotels.svg'),
              count: 1500,
              reason: 'Отель'
            }
          ],
          spend: [
            {
              icon: require('./components/hero-stat/hero-stat-first-class.svg'),
              count: 4000,
              reason: 'Повышение класса<br/>обслуживания'
            },
            {
              icon: require('./components/hero-stat/hero-stat-shopping.svg'),
              count: 15,
              reason: 'Покупки на борту'
            },
            {
              icon: require('./components/hero-stat/hero-stat-tiket.svg'),
              count: '',
              reason: 'Полная или<br/>частичная оплата<br/>авиабилетов'
            }
          ],
          miles: [
            {
              count: 0,
              route: ''
            },
            {
              count: 10000,
              route: 'Нижний Новгород - Лондон'
            },
            {
              count: 35844,
              route: 'Нижний Новгород - Пекин'
            },
            {
              count: 64442,
              route: 'Нижний Новгород - Бангкок'
            },
            {
              count: 78650,
              route: 'Москва - Тенерифе'
            },
            {
              count: 88650,
              route: 'Нижний Новгород - Прага'
            },
            {
              count: 90650,
              route: 'Оплата по карте Ситибанк Miles & More'
            },
            {
              count: 92150,
              route: 'Бронирование отеля'
            }
          ]
        },
        alex: {
          avatar: require('./components/heroes/hero-alex.jpg'),
          name: 'Алексей<br/>Мяков',
          alias: 'alex',
          job: 'Chief Computer Vision Advocate, Intel',
          quote: '<span>Во время перелёта мне часто</span><br/>приходится работать, и тут<br/>очень кстати приходится<br/>' +
          'интернет на борту. Бывало, что<br/>за перелёт я отправлял порядка<br/>200–300 писем.',
          annotation: 'Технологический мир захватывает не меньше полётов. Путешествуя по всему<br/>миру, Алексей Мяков ' +
          'учит видеокамеры не просто видеть, но и понимать, что<br/>происходит в кадре.',
          accumulate: [
            {
              icon: require('./components/hero-stat/hero-stat-avia.svg'),
              count: 51340,
              reason: 'Авиаперелеты'
            },
            {
              icon: require('./components/hero-stat/hero-stat-citibank.svg'),
              count: '',
              reason: 'Оплата кредитной<br/>картой Ситибанка<br/>Miles & More'
            },
            {
              icon: require('./components/hero-stat/hero-stat-avto.svg'),
              count: 500,
              reason: 'Аренда машины'
            },
            {
              icon: require('./components/hero-stat/hero-stat-shopping.svg'),
              count: 100,
              reason: 'Покупки за<br/>границей <br/>(100 евро —<br/>100 миль)'
            }
          ],
          spend: [
            {
              icon: require('./components/hero-stat/hero-stat-first-class.svg'),
              count: 40000,
              reason: 'Повышение класса<br/>обслуживания'
            },
            {
              icon: require('./components/hero-stat/hero-stat-tiket.svg'),
              count: '1 575 000',
              reason: 'Полная или<br/>частичная оплата<br/>авиабилетов'
            }
          ],
          miles: [
            {
              count: 0,
              route: ''
            },
            {
              count: 15694,
              route: 'Москва — Сан-Франциско и обратно'
            },
            {
              count: 46340,
              route: 'Москва — Токио и обратно'
            },
            {
              count: 46840,
              route: 'Автомобиль Hertz в прокат на сайте Miles & More'
            },
            {
              count: 51840,
              route: 'Перелёт Москва–Франкфурт'
            },
            {
              count: 51940,
              route: 'Покупки за границей: 100 евро — 100 миль'
            }
          ]
        }
      }
    }
  },
  mounted () {
    let that = this
    window.jQuery = jQuery

    jQuery('.app__wrapper').fullpage({
      animateAnchor: false,
      autoScrolling: false,
      fitToSection: false,
      sectionSelector: '.section:visible',
      onLeave (index, nextIndex, direction) {
        that.$root.$emit('slide-leave', index, nextIndex)
      },
      afterLoad (anchorLink, index) {
        that.$root.$emit('slide-load', anchorLink, index)
      }
    })
  }
}
