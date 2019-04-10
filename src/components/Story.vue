<script>
import Banner from './Banner'
import { mapMutations } from 'vuex'
import { MUTATION_SET_MILE, MUTATION_SET_BONUSES_VISIBILITY } from '../constants'

export default {
  components: { Banner },
  methods: {
    ...mapMutations([MUTATION_SET_MILE, MUTATION_SET_BONUSES_VISIBILITY]),
    changeMile ({ going, direction }) {
      if (direction === this.$waypointMap.DIRECTION_TOP && going === this.$waypointMap.GOING_IN) {
        if (this.index < this.milesCount) {
          this.$store.commit(MUTATION_SET_MILE, {
            going: going,
            direction: direction,
            hero: this.hero,
            index: this.index
          })
          this.index++
        }
      } else if (direction === this.$waypointMap.DIRECTION_BOTTOM && going === this.$waypointMap.GOING_OUT) {
        if (this.index > 0) {
          this.index--
          this.$store.commit(MUTATION_SET_MILE, {
            going: going,
            direction: direction,
            hero: this.hero,
            index: this.index
          })
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
</script>

<style lang="scss">
  .story {
    a {
      color: $brand-blue;
    }

    &__photo {
      max-width: 270px;
      margin-left: -$grid-gutter-width;
    }
  }
</style>
