<template>
  <div class="input-jumbotron" :class="{ collapsed: collapsed }">
    <div class="container">
      <h1 v-show="!collapsed">Create word clouds easily</h1>
      <div class="row input justify-content-center">
        <form class="col-10 col-md-8" @submit.prevent="submit">
          <div class="input-group input-group-lg shadow-lg rounded">
            <input type="url" class="form-control" placeholder="https://example.com" v-model="url"/>
            <div class="input-group-append">
              <button class="btn btn-primary"><search-icon size="1x" aria-hidden/></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  data() {
    return {
      url: ''
    }
  },
  props: ['collapsed', 'initial-url'],
  components: {
    SearchIcon
  },
  methods: {
    submit() {
      this.$router.push({
        name: 'results',
        query: {
          url: this.url
        }
      })
    }
  },
  watch: {
    initialUrl() {
      this.url = this.initialUrl
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/_variables.sass"

.input-jumbotron
  background-color: $primary
  position: relative
  text-align: center
  padding: 20vh 0
  margin-bottom: 5em
  h1
    font-size: 3rem
    color: #FFF
  &.collapsed
    padding: 5vh 0
  .input
    position: absolute
    width: 100%
    left: 50%
    top: 100%
    margin: 0
    transform: translate(-50%, -50%)
</style>
