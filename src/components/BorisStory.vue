<template>
  <div class="story section">
    <div class="container container_full">
      <div class="grid">
        <div class="span-3">
          <blockquote class="quote">
            В полётах с Lufthansa<br>
            я чувствую заботу<br>
            и внимание к мелочам<br>
            на всём пути.<br>
            Мой первый перелёт с немецкой
            компанией проходил из Нижнего
            Новгорода во Франкфурт
          </blockquote>
          <img
            class="story__photo"
            src="../assets/hero-boris/boris-story-photo-1.jpg"
            alt=""
          >
          <blockquote class="quote">
            Мой мильный счет пополняется, когда я покупаю авиабилеты, делаю покупки в магазинах-партнерах или просто
            расплачиваюсь кредитной картой Ситибанка Miles & More
          </blockquote>
          <img
            class="story__photo"
            src="../assets/hero-boris/boris-story-photo-2.jpg"
            alt=""
          >
        </div>
        <div class="span-6 offset-1">
          <h1 class="heading">
            Истина в деталях
          </h1>
          <p class="paragraph">
            Когда вы изучаете новый язык, важно не просто зазубрить правила и
            набрать словарный запас, но познакомиться с культурой и
            особенностями соответствующей страны. В каждом новом путешествии
            я стараюсь подметить нечто-то характерное только для этого места.
            Будет ли это танго, которое танцуют на каждом углу в Аргентине, или
            тонкости этикета в Китае — я обращаю внимание на всё, что делает эту
            страну особенной.
          </p>
          <p class="paragraph">
            В полётах с Lufthansa я чувствую заботу и внимание к мелочам на всём
            пути. Мой первый перелёт с немецкой компанией проходил из Нижнего
            Новгорода во Франкфурт. С тех пор я посетил множество стран и, в
            первую очередь, из служебной необходимости. Я лично занимаюсь
            налаживанием партнёрств с университетами за рубежом, чтобы в НГЛУ
            преподавали как можно больше самых разных языков.
          </p>
          <h1 class="heading">
            Мили на комфорт
          </h1>
          <span v-waypoint="{ active: true, callback: (props) => setBonusesVisibility({...props, value: true}) }"></span>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            К поездкам я готовлюсь самостоятельно, чтобы учесть все детали.
            Например, для меня важно, чтобы стыковка длилась не меньше
            полутора часов, особенно если предстоит пройти паспортный контроль.
            <a
              target="_blank"
              href="http://www.miles-and-more.com/online/portal/mam/ru/homepage?nodeid=2312229&l=ru&cid=1000348&campid=disp_forbes_1117_logo__mml"
            >Бронируя билет</a>,
            я выбираю удобное для меня место у прохода.
            Исключением становятся такие города, как Лондон, где ты можешь
            разглядеть город, когда летишь над ним.
          </p>
          <p class="paragraph">
            <a
              target="_blank"
              href="http://www.miles-and-more.com/online/portal/mam/ru/homepage?nodeid=2312229&l=ru&cid=1000348&campid=disp_forbes_1117_logo__mml"
            >Жильё я тоже выбираю сам</a>,
            обращая внимание на мелочи, которые
            создают атмосферу поездки. Для меня важно, чтобы отель находился
            близко к интересным местам: это помогает отдохнуть от переездов и
            сэкономить время.
          </p>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            Я давно накапливаю мили <a
              target="_blank"
              href="https://www.miles-and-more.com/online/portal/mam/ru/account/enrolment?l=ru&cid=1000348&campid=disp_forbes_1117_textlink__mml"
            >Miles & More</a>.
            Они делают мои путешествия
            ещё комфортнее. Мой мильный счёт пополняется, когда я покупаю
            авиабилеты, делаю покупки в аэропорту или просто расплачиваюсь
            своей кредитной картой Ситибанка <a
              target="_blank"
              href="https://www.miles-and-more.com/online/portal/mam/ru/account/enrolment?l=ru&cid=1000348&campid=disp_forbes_1117_textlink__mml"
            >
              Miles & More</a>.
            Ежемесячно я получаю
            примерно 2500–3000 миль за покупки.
          </p>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            Я часто трачу мили на повышение класса обслуживания и каждый раз я
            жду, что команда бизнес-класса удивит чем-то новым. Я также
            расплачиваюсь милями за покупки на борту самолёта. У меня уже много
            премиальных миль, но я продолжаю их накапливать. В будущем я смогу
            частично или полностью <a
              target="_blank"
              href="https://www.miles-and-more.com/online/portal/mam/ru/homepage?nodeid=2312229&l=ru&cid=1000348&campid=disp_forbes_1117_logo__mml"
            >оплатить билет на самолёт милями</a>.
            Вместе с коллегами мы также копим корпоративные мили, на которые тоже делаем повышение класса.
          </p>
          <p class="paragraph">
            Всего за этот год я накопил около 83 000 миль, слетав в Лондон, Ханой,
            Сеул, Шанхай, Прагу, Дюссельдорф и Мюнхен. Впереди меня ждёт ещё
            два перелёта: в Европу и в Азию.
          </p>
          <h1 class="heading">
            Восток и запад
          </h1>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            Если в 90-х годах наш университет ориентировался на европейские
            языки, то сейчас мы занимаемся и восточными языками, поэтому мои
            путешествия затрагивают и западные, и восточные культуры. В этом году
            я ездил во Вьетнам — надеюсь, скоро мы встретим студентов и оттуда.
          </p>
          <p class="paragraph">
            У меня было много поездок с нашими студентами в Великобританию:
            там остались хорошие связи с языковыми школами. Британцы не дают
            заскучать и заполняют программу полностью. Я тесно познакомился с
            центром Лондона и английской провинцией, а, как говорится, чем
            больше знаешь — тем больше любишь.
          </p>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            Второй мой любимый город — Бангкок. Там я чувствую себя также
            комфортно, как в Лондоне. И опять же, всё дело деталях. Даже понятная
            система метро или талончики на такси, которые выдают в аэропорту
            Суварнабхуми, располагают к городу. А ещё в Бангкоке и Лондоне очень вкусная еда.
          </p>
        </div>
        <banner :banner="$store.state.banners[2]" />
        <div class="span-3">
          <blockquote class="quote">
            Я считаю, что программа для<br>
            часто летающих пассажиров –<br>
            это взаимовыгодное<br>
            сотрудничество
          </blockquote>
          <img
            class="story__photo"
            src="../assets/hero-boris/boris-story-photo-3.jpg"
            alt=""
          >
        </div>
        <div class="span-6 offset-1">
          <h1 class="heading">
            Совмещать приятное с<br>полезным
          </h1>
          <p class="paragraph">
            Даже во время деловых поездок я стараюсь немного отдохнуть, успеть познакомиться с традициями и культурой
            принимающей страны. Иногда у меня остаётся время на <a
              target="_blank"
              href="http://www.miles-and-more.com/online/portal/mam/ru/homepage?nodeid=2312229&l=ru&cid=1000348&campid=disp_forbes_1117_logo__mml"
            >покупки</a>, и я стараюсь что-то найти для внука. Как заядлый
            любитель машин, он всегда ждёт какую-нибудь футболку с автомобилем. Но обычно сувениры, которые я привожу,
            отражают дух страны, в которой я побывал.
          </p>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            Изредка мне удаётся путешествовать вместе с семьёй, хотя наши предпочтения сходятся не всегда: если летом
            родные стремятся отправиться к океану, на испанский Тенерифе, то я предпочитаю слетать в Карловы Вары и Прагу.
          </p>
          <h1 class="heading">
            Мили — это надолго
          </h1>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            Я люблю летать и предпочитаю самолёт другим видам транспорта, потому что это быстро и увлекательно.
            В том году Lufthansa предложила узнать, сколько времени я провёл в небе: оказалось, примерно 8–9 дней ежегодно.
            Тогда у меня были большие перелёты в Китай и Таиланд.
          </p>
          <p class="paragraph">
            Тем не менее, остаётся ещё много мест, которые я бы хотел посетить. Даже в Европе. Думаю, здесь мне и
            пригодятся накопленные мили. С ними ты чувствуешь себя более уверенно, а то, что мили не сгорают со временем —
            большой плюс.
          </p>
          <p class="paragraph" v-waypoint="{ active: true, callback: changeMile }">
            Я считаю, что <a
              target="_blank"
              href="http://www.miles-and-more.com/online/portal/mam/ru/homepage?nodeid=2312229&l=ru&cid=1000348&campid=disp_forbes_1117_logo__mml"
            >программа для часто летающих пассажиров</a>
            —
            это взаимовыгодное сотрудничество.
          </p>
          <span v-waypoint="{ active: true, callback: (props) => setBonusesVisibility({...props, value: false}) }"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Story from './Story'
import { HERO_BORIS_NAME } from '../constants'

export default {
  name: 'BorisStory',
  extends: Story,
  data () {
    return {
      hero: HERO_BORIS_NAME,
      milesCount: 8
    }
  }
}
</script>
