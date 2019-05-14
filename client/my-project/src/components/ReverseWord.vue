<template lang="pug">
  div(class="reversed")
    h1 {{ msg }}
    div Enter some text and press the button.
    div
      input(type="text", v-model="someText")
    div
      button(v-on:click="loadReverse") Reverse It
    table
      tr
        td someText:
        td {{ someText}}
      tr
        td reversed:
        td {{reversed}}
    div
      p Will send API requests to {{apiUrl}}
</template>

<script>
import axios from 'axios'
export default {
  name: 'Reverse',
  data () {
    return {
      reversed: '',
      someText:''
    }
  },
  props: {
    msg: String
  },
  computed: {
    apiUrl () {
      return process.env.VUE_APP_API_URL
    }
  },
  methods: {
    loadReverse () {
      const _this = this
      console.log('Reversing activity. ', this.someText)
      let url = `${this.apiUrl}/reverse?data=${this.someText}`
      return new Promise(resolve => {
        axios.get(url).then(response => {
          console.log('load reverse', response.data)
          if (response.data) {
            _this.reversed = response.data
          }
          resolve(response.data)
        })
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.reversed {
  text-align: left;
  margin-left: 5rem;
}
h3 {
  margin: 40px 0 0;
}
</style>
