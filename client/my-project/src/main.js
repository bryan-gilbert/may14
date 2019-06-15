import Vue from 'vue'
import App from './App.vue'

console.log('process.env',process.env)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
