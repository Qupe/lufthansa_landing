import 'fullpage.js'

import FirstStep from '../first-step/first-step.vue'
import SecondStep from '../second-step/second-step.vue'
import ThirdStep from '../third-step/third-step.vue'
import HeroCard from '../hero-card/hero-card.vue'
import HeroStat from '../hero-stat/hero-stat.vue'
import Bonuses from '../bonuses/bonuses.vue'
import BorisStory from '../boris-story/boris-story.vue'
import About from '../about/about.vue'
import IgorStory from '../igor-story/igor-story.vue'
import AlexStory from '../alex-story/alex-story.vue'
import Foot from '../foot/foot.vue'

export default {
  components: {
    AlexStory,
    IgorStory,
    About,
    BorisStory,
    Bonuses,
    HeroCard,
    HeroStat,
    ThirdStep,
    SecondStep,
    FirstStep,
    Foot
  },
  data () {
    return {
      heroes: {
        igor: {
          name: 'Игорь<br/>Найдин',
          job: 'Альтист в квартете им. Бородина',
          annotation: 'Музыка не знает границ, уверен Игорь Найдин. Международные конкурсы<br/>в свое время ' +
          'познакомили его с большей частью Европы, но артист привык искать<br/>вдохновение на всех континентах. ' +
          'Вместе с другими участниками квартета<br/>Владимиром Бальшиным, Сергеем Ломовским, Рубеном Агароняном они<br/>' +
          'гастролируют по всему миру и ищут вдохновение в каждом полёте.',
          alias: 'igor',
          accumulate: [
            {
              icon: require('../hero-stat/hero-stat-avto.svg'),
              count: 500,
              reason: 'Аренда машины'
            },
            {
              icon: require('../hero-stat/hero-stat-avia.svg'),
              count: 10000,
              reason: 'Авиаперелет<br/>Москва — Вена<br/>(+Executive Bonus)'
            },
            {
              icon: require('../hero-stat/hero-stat-shopping-airport.svg'),
              count: 200,
              reason: 'Покупки в аэропорту'
            },
            {
              icon: require('../hero-stat/hero-stat-shopping.svg'),
              count: 35,
              reason: 'Покупки на борту'
            }
          ],
          spend: [
            {
              icon: require('../hero-stat/hero-stat-first-class.svg'),
              count: 50000,
              reason: 'Повышение класса<br/>обслуживания'
            },
            {
              icon: require('../hero-stat/hero-stat-tiket.svg'),
              count: '',
              reason: 'Полная или<br/>частичная оплата<br/>авиабилетов'
            }
          ]
        },
        boris: {
          name: 'Борис<br/>Жигалёв',
          job: 'Ректор НГЛУ им. Н.А. Добролюбова',
          annotation: 'Любовь к иностранным языкам открывает новые горизонты. Борис летает по всей Европе в поисках ' +
          'академического сотрудничества с другими университетами. Он уверен, что простого знания слов и ' +
          'грамматики мало — нужно тесно знакомиться с культурой страны.',
          alias: 'boris',
          accumulate: [
            {
              icon: require('../hero-stat/hero-stat-tiket.svg'),
              count: 88650,
              reason: 'Авиабилеты'
            },
            {
              icon: require('../hero-stat/hero-stat-citibank.svg'),
              count: 2800,
              reason: 'Оплата кредитной<br/>картой Ситибанка<br/>Miles & More'
            },
            {
              icon: require('../hero-stat/hero-stat-hotels.svg'),
              count: 1500,
              reason: 'Отель'
            }
          ],
          spend: [
            {
              icon: require('../hero-stat/hero-stat-first-class.svg'),
              count: 4000,
              reason: 'Повышение класса<br/>обслуживания'
            },
            {
              icon: require('../hero-stat/hero-stat-shopping.svg'),
              count: 15,
              reason: 'Покупки на борту'
            },
            {
              icon: require('../hero-stat/hero-stat-tiket.svg'),
              count: '',
              reason: 'Полная или<br/>частичная оплата<br/>авиабилетов'
            }
          ]
        },
        alex: {
          name: 'Алексей<br/>Мяков',
          job: 'Chief Computer Vision Advocate, Intel',
          annotation: 'Технологический мир захватывает не меньше полётов. Путешествуя по всему<br/>миру, Алексей Мяков ' +
          'учит видеокамеры не просто видеть, но и понимать, что<br/>происходит в кадре.',
          alias: 'alex',
          accumulate: [
            {
              icon: require('../hero-stat/hero-stat-avia.svg'),
              count: 51340,
              reason: 'Авиаперелеты'
            },
            {
              icon: require('../hero-stat/hero-stat-citibank.svg'),
              count: '',
              reason: 'Оплата кредитной<br/>картой Ситибанка<br/>Miles & More'
            },
            {
              icon: require('../hero-stat/hero-stat-avto.svg'),
              count: 500,
              reason: 'Аренда машины'
            },
            {
              icon: require('../hero-stat/hero-stat-shopping.svg'),
              count: 100,
              reason: 'Покупки за<br/>границей <br/>(100 евро —<br/>100 миль)'
            }
          ],
          spend: [
            {
              icon: require('../hero-stat/hero-stat-first-class.svg'),
              count: 40000,
              reason: 'Повышение класса<br/>обслуживания'
            },
            {
              icon: require('../hero-stat/hero-stat-tiket.svg'),
              count: '1 575 000',
              reason: 'Полная или<br/>частичная оплата<br/>авиабилетов'
            }
          ]
        }
      }
    }
  },
  name: 'layout'
}
