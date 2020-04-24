<template>
  <div id="home">
    <div class="hero">
      <input-jumbotron/>
    </div>
  </div>
</template>

<script>
import InputJumbotron from '../components/InputJumbotron'

export default {
  components: { InputJumbotron }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.hero
  background-color: $primary
</style>
