export default {
  name: 'bonuses',
  props: ['visible', 'direction', 'distance'],
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
          icon: [require('./bonuses-aviaperelet.svg'), require('./bonuses-aviaperelet_active.svg')],
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
          icon: [require('./bonuses-hotels.svg'), require('./bonuses-hotels_active.svg')],
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
          icon: [require('./bonuses-prokat-avto.svg'), require('./bonuses-prokat-avto_active.svg')],
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
          icon: [require('./bonuses-bank-card.svg'), require('./bonuses-bank-card_active.svg')],
          name: 'Банковские карты «Miles & More»',
          active: false,
          reached: false,
          point: 48,
          description: '<p><b>Бонусы по банковским картам.</b> Источник миль — уже у вас в кармане. Накапливайте ' +
          'премиальные мили, совершая покупки по карте одного из банков-партнёров.</p>'
        },
        {
          icon: [require('./bonuses-shopping.svg'), require('./bonuses-shopping_active.svg')],
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
          icon: [require('./bonuses-shopping-airport.svg'), require('./bonuses-shopping-airport_active.svg')],
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
          icon: [require('./bonuses-charity.svg'), require('./bonuses-charity_active.svg')],
          name: 'Мили на благотворительность',
          active: false,
          reached: false,
          point: 77,
          description: '<p><b>Мили на благотворительность.</b> По всему миру люди ждут помощи. Вы можете повысить ' +
          'качество жизни нуждающихся. Переведите от 3000 до 50000 миль в общий фонд пожертвований или направьте ' +
          'мили на решение проблемы, которая волнует вас больше: образование, здоровье, работа или питание.</p>'
        },
        {
          icon: [require('./bonuses-seacruise.svg'), require('./bonuses-seacruise_active.svg')],
          name: 'Мили за покупку круиза',
          active: false,
          reached: false,
          point: 89,
          description: '<p><b>Отдохните в круизном путешествии и заработайте мили.</b> Команда агентства ' +
          'Kreuzfahrten.de приготовит для вас незабываемое путешествие!Более 20000 вариантов круизов и множество ' +
          'эксклюзивных предложений ждут вас. Каждый потраченный евро принесёт одну премиальную милю.</p>'
        }
      ]
    }
  }
}
