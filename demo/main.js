import Vue from 'vue'
import LocationPickerInit from '../src/init'
import LocationPicker from '../src/LocationPicker.vue'

new Vue({
  el: 'body',

  ready () {
    LocationPickerInit(this, { key: 'AIzaSyBmBM_Utpx3unBuhiTTR5yMptdMZSxelo4' }, {
      map: {
        center: { lat: 39.3622, lng: 22.9422 },
        zoom: 8,
        minZoom: 3
      },
      marker: { icon: 'demo/assets/marker.png' },
      infoWindow: { maxWidth: 230 }
    })
  },

  components: { LocationPicker }
})
