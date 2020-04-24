<template>
  <div id="results">
    <input-jumbotron collapsed="true" :initial-url="url"/>
    <section id="cloud">
      <div class="container">
        <h2>Results for <code>{{ url }}</code></h2>
        <word-cloud :words="words" v-if="!loadingWords"></word-cloud>
        <div class="alert alert-info" v-else>
          <loader-icon size="1x" class="spin mx-4"/>
          Loading
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import InputJumbotron from '@/components/InputJumbotron'
import WordCloud from '@/components/WordCloud'

import { LoaderIcon } from 'vue-feather-icons'

import axios from 'axios'

export default {
  data() {
    return {
      words: [],
      loadingWords: true
    }
  },
  components: {
    InputJumbotron,
    WordCloud,
    LoaderIcon
  },
  computed: {
    url() { return this.$route.query.url }
  },
  watch: {
    url(url) {
      let instance = this

      if (url) {
        axios.get('word-list', {
          params: {
            url: url
          }
        }).then((r) => {
          instance.words = r.data
        })
      }
    }
  }
}
</script>
