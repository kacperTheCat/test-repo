import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import Message from './components/Message.vue'
import './stylesheets/main.scss'

Vue.component('app-message', Message)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
