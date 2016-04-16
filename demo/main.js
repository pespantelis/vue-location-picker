import Vue from 'vue'
import LocationPicker from '../src/LocationPicker.vue'

global.app = new Vue({
  el: 'body',

  components: { LocationPicker },

  methods: {
    initLocationPicker () {
      this.$broadcast('location-picker-init')
    }
  }
})
