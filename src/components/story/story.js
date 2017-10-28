import Banner from '../banner/banner.vue'

export default {
  components: {Banner},
  props: ['setVisible', 'setInvisible', 'setMile'],
  methods: {
    changeMile (direction, going) {
      if (direction.y === 'down' && going === 'in') {
        if (this.index < this.milesCount) {
          this.setMile(direction, going, this.hero, this.index)
          this.index++
        }
      } else if (direction.y === 'up' && going === 'out') {
        if (this.index > 0) {
          this.index--
          this.setMile(direction, going, this.hero, this.index)
        }
      }
    }
  },
  data () {
    return {
      index: 0
    }
  }
}
