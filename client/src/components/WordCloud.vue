<template>
<div class="row word-cloud">
  <div class="col-md-4">
    <label>Excluded words</label>
    <div class="input-group">
      <input type="text" class="form-control" v-model="newWord">
      <div class="input-group-append">
        <button class="btn btn-primary" @click="excludedWords.push(newWord)">
          <plus-icon/>
        </button>
      </div>
    </div>
    <span class="badge badge-primary mr-3 my-3" v-for="(word, index) in excludedWords" :key="word" @click="excludedWords.splice(index, 1)">
      {{ word }}
    </span>
  </div>
  <div class="col-md-8">
    <canvas id="cloudCanvas" ref="cloud-canvas" height="400px"></canvas>
    <div ref="resize-helper"></div>
  </div>
</div>
</template>

<script>
import { PlusIcon } from 'vue-feather-icons'

import WordCloud from 'wordcloud'

export default {
  data() {
    return {
      excludedWords: [],
      newWord: "",
    }
  },
  components: { PlusIcon },
  props: ['words'],
  computed: {
    cloudWords() {
      return this.words.filter(w => {
        return this.excludedWords.indexOf(w[0]) == -1
      })
    }
  },
  watch: {
    cloudWords(list) {
      if (list.length) {
        this.drawWordCloud()
      }
    }
  },
  mounted() {
    let instance = this

    instance.$refs['cloud-canvas'].width = (instance.$refs['resize-helper'].clientWidth)
    instance.drawWordCloud()

    window.onresize = () => {
      instance.$refs['cloud-canvas'].width = (instance.$refs['resize-helper'].clientWidth)
      instance.drawWordCloud()
    }
  },
  methods: {
    drawWordCloud() {
      let instance = this

      WordCloud(instance.$refs['cloud-canvas'], {
        list: instance.cloudWords,
        fontFamily: 'Manrope',
        color: '#281DFF',
        backgroundColor: 'transparent',
        weightFactor: 4
      })
    }
  }
}
</script>
