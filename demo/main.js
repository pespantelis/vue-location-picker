import Vue from 'vue'
import LocationPicker from '../src/LocationPicker.vue'

global.app = new Vue({
  el: 'body',

  data: {
    mapOptions: {
      map: {
        center: { lat: 39.3622, lng: 22.9422 },
        zoom: 8,
        minZoom: 3
      },
      marker: { icon: 'demo/assets/marker.png' },
      infoWindow: { maxWidth: 230 }
    }
  },

  components: { LocationPicker },

  methods: {
    initLocationPicker () {
      this.$broadcast('location-picker-init')
    }
  }
})
