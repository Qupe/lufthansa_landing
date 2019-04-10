import Vue from 'vue'
import Vuex from 'vuex'
import scroll from 'zenscroll'
import {
  HERO_BORIS_NAME,
  HERO_ALEX_NAME,
  HERO_IGOR_NAME,
  MUTATION_SET_SLIDE_HEIGHT,
  MUTATION_SET_SCROLLED_TOP,
  MUTATION_SET_ABOUT_VISIBILITY,
  MUTATION_SET_BONUSES_VISIBILITY,
  MUTATION_SET_MILE
} from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slideHeight: undefined,
    scrolledTop: scroll.getY(),
    slideAboutVisibility: false,
    bonusesVisibility: false,
    mile: {
      count: 0,
      route: ''
    },
    distance: 0,
    direction: true,
    index: 0,
    heroes: {
      [HERO_IGOR_NAME]: {
        avatar: require('./assets/hero-igor/hero-igor.jpg'),
        name: 'Игорь<br/>Найдин',
        alias: HERO_IGOR_NAME,
        job: 'Альтист в квартете им. Бородина',
        quote: '<span>Я обожал летать на самолёте,</span><br/>ещё когда был маленьким. Любил,<br/>' +
          'когда самолёт<br/>подбрасывает в воздухе — чем<br/>сильней, тем лучше.',
        annotation: 'Музыка не знает границ, уверен Игорь Найдин. Международные конкурсы<br/>в свое время ' +
          'познакомили его с большей частью Европы, но артист привык искать<br/>вдохновение на всех континентах. ' +
          'Вместе с другими участниками квартета<br/>Владимиром Бальшиным, Сергеем Ломовским, Рубеном Агароняном они<br/>' +
          'гастролируют по всему миру и ищут вдохновение в каждом полёте.',
        accumulate: [
          {
            icon: require('./assets/stat/hero-stat-avto.svg'),
            count: 500,
            reason: 'Аренда машины'
          },
          {
            icon: require('./assets/stat/hero-stat-avia.svg'),
            count: 10000,
            reason: 'Авиаперелет <br/> Москва - Вена <br/>'
          },
          {
            icon: require('./assets/stat/hero-stat-shopping-airport.svg'),
            count: 200,
            reason: 'Покупки в аэропорту'
          },
          {
            icon: require('./assets/stat/hero-stat-shopping.svg'),
            count: 35,
            reason: 'Покупки на борту'
          }
        ],
        spend: [
          {
            icon: require('./assets/stat/hero-stat-first-class.svg'),
            count: 50000,
            reason: 'Повышение класса<br/>обслуживания'
          },
          {
            icon: require('./assets/stat/hero-stat-tiket.svg'),
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
      [HERO_BORIS_NAME]: {
        avatar: require('./assets/hero-boris/hero-boris.jpg'),
        name: 'Борис<br/>Жигалёв',
        alias: HERO_BORIS_NAME,
        job: 'Ректор НГЛУ им. Н.А. Добролюбова',
        quote: '<span>Я люблю летать и предпочитаю</span><br/>самолёт другим видам<br/>транспорта, ' +
          'потому что это<br/>быстро и увлекательно.',
        annotation: 'Любовь к иностранным языкам открывает новые горизонты. Борис летает по всей Европе в поисках ' +
          'академического сотрудничества с другими университетами. Он уверен, что простого знания слов и ' +
          'грамматики мало — нужно тесно знакомиться с культурой страны.',
        accumulate: [
          {
            icon: require('./assets/stat/hero-stat-tiket.svg'),
            count: 88650,
            reason: 'Авиабилеты'
          },
          {
            icon: require('./assets/stat/hero-stat-citibank.svg'),
            count: 2800,
            reason: 'Оплата кредитной<br/>картой Ситибанка<br/>Miles & More'
          },
          {
            icon: require('./assets/stat/hero-stat-hotels.svg'),
            count: 1500,
            reason: 'Отель'
          }
        ],
        spend: [
          {
            icon: require('./assets/stat/hero-stat-first-class.svg'),
            count: 4000,
            reason: 'Повышение класса<br/>обслуживания'
          },
          {
            icon: require('./assets/stat/hero-stat-shopping.svg'),
            count: 15,
            reason: 'Покупки на борту'
          },
          {
            icon: require('./assets/stat/hero-stat-tiket.svg'),
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
      [HERO_ALEX_NAME]: {
        avatar: require('./assets/hero-alex/hero-alex.jpg'),
        name: 'Алексей<br/>Мяков',
        alias: HERO_ALEX_NAME,
        job: 'Chief Computer Vision Advocate, Intel',
        quote: '<span>Во время перелёта мне часто</span><br/>приходится работать, и тут<br/>очень кстати приходится<br/>' +
          'интернет на борту. Бывало, что<br/>за перелёт я отправлял порядка<br/>200–300 писем.',
        annotation: 'Технологический мир захватывает не меньше полётов. Путешествуя по всему<br/>миру, Алексей Мяков ' +
          'учит видеокамеры не просто видеть, но и понимать, что<br/>происходит в кадре.',
        accumulate: [
          {
            icon: require('./assets/stat/hero-stat-avia.svg'),
            count: 51340,
            reason: 'Авиаперелеты'
          },
          {
            icon: require('./assets/stat/hero-stat-citibank.svg'),
            count: '',
            reason: 'Оплата кредитной<br/>картой Ситибанка<br/>Miles & More'
          },
          {
            icon: require('./assets/stat/hero-stat-avto.svg'),
            count: 500,
            reason: 'Аренда машины'
          },
          {
            icon: require('./assets/stat/hero-stat-shopping.svg'),
            count: 100,
            reason: 'Покупки за<br/>границей <br/>(100 евро —<br/>100 миль)'
          }
        ],
        spend: [
          {
            icon: require('./assets/stat/hero-stat-first-class.svg'),
            count: 40000,
            reason: 'Повышение класса<br/>обслуживания'
          },
          {
            icon: require('./assets/stat/hero-stat-tiket.svg'),
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
    },
    banners: [
      {
        title: 'Выиграйте 1 000 000 миль за<br/>покупки на борту',
        description: 'До 31 октября Lufthansa разыгрывает миллион премиальных миль.<br/>Вам достаточно лишь купить что-нибудь во время перелёта.',
        image: require('./assets/banner/banner-image-1.jpg'),
        link: 'http://www.miles-and-more.com/online/portal/mam/rowr/earn/flight?l=ru&cid=10001'
      },
      {
        title: 'Арендуйте Audi в аэропорту<br/>Мюнхена и получите 3000 миль',
        description: 'Выбирайте машину под любой случай и отправляйтесь в путешествие. Аренда<br/>' +
          'минимум на 8 часов принесёт вам три тысячи премиальных миль в аэропорту<br/>' +
          'имени Франца-Йозефа Штрауса.',
        image: require('./assets/banner/banner-image-2.jpg'),
        link: 'http://www.miles-and-more.com/online/portal/mam/rowr/earn/car_rental?l=ru&cid=10001'
      },
      {
        title: 'В 2 раза больше миль от Marriott:<br/>соберите до 35 000 бонусов этой осенью',
        description: 'Станьте участником программы Marriott Rewards® и получите в два раза больше<br/>' +
          'миль за проживания в период с 31 июля по 29 октября.' +
          'имени Франца-Йозефа Штрауса.',
        image: require('./assets/banner/banner-image-3.jpg'),
        link: ''
      },
      {
        title: 'Получите 1000 дополнительных<br/>миль в отелях Westin, Sheraton и W Hotels',
        description: 'Проведите две ночи в одном из партнёрских отелей программы Starwood<br/>' +
          'Preferred Guest до 31 декабря и получите дополнительно тысячу миль.' +
          'имени Франца-Йозефа Штрауса.',
        image: require('./assets/banner/banner-image-4.jpg'),
        link: 'http://www.miles-and-more.com/online/portal/mam/rowr/earn/hotel?l=ru&cid=10001'
      },
      {
        title: 'Получите 10 000 миль в октябре за<br/>первое бронирование отеля через сайт Miles & More',
        description: 'До 30 ноября - 500 миль за первое скачивание приложения Miles & More',
        image: require('./assets/banner/banner-image-5.jpg'),
        link: 'http://www.miles-and-more.com/online/portal/mam/rowr/earn/hotel?l=ru&cid=10001'
      }
    ]
  },
  mutations: {
    [MUTATION_SET_SLIDE_HEIGHT] (state, value) {
      state.slideHeight = value
    },
    [MUTATION_SET_SCROLLED_TOP] (state, value) {
      state.scrolledTop = value
    },
    [MUTATION_SET_ABOUT_VISIBILITY] (state, value) {
      state.slideAboutVisibility = value
    },
    [MUTATION_SET_BONUSES_VISIBILITY] (state, { direction, going, value }) {
      if (direction === this._vm.$waypointMap.DIRECTION_TOP && going === this._vm.$waypointMap.GOING_IN) {
        state.bonusesVisibility = value
      } else if (direction === this._vm.$waypointMap.DIRECTION_BOTTOM && going === this._vm.$waypointMap.GOING_OUT) {
        state.bonusesVisibility = !value
      }
    },
    [MUTATION_SET_MILE] (state, { going, direction, hero, index }) {
      if (direction === this._vm.$waypointMap.DIRECTION_TOP && going === this._vm.$waypointMap.GOING_IN) {
        state.direction = true
        state.distance += 4.55
        state.mile = state.heroes[hero].miles[index]
      } else if (direction === this._vm.$waypointMap.DIRECTION_BOTTOM && going === this._vm.$waypointMap.GOING_OUT) {
        state.direction = false
        state.distance -= 4.55
        state.mile = state.heroes[hero].miles[index]
      }
    }
  }
})
