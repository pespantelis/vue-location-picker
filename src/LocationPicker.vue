<template>
  <div class="LocationPicker">
    <div class="LocationPicker__map" v-el:map></div>
    <info-window class="LocationPicker__info-window" v-ref:info></info-window>
  </div>
</template>


<script>
  import InfoWindow from './InfoWindow.vue'

  export default {
    data () {
      return {
        geocoder: null,
        map: null,
        marker: null,
        infoWindow: null
      }
    },

    components: { InfoWindow },

    events: {
      'location-picker-init' () {
        this.geocoder = new google.maps.Geocoder()

        this.map = new google.maps.Map(this.$els.map, {
          center: {lat: 39.3622, lng: 22.9422},
          zoom: 8,
          disableDefaultUI: true
        })

        this.marker = new google.maps.Marker({
          map: this.map,
          position: this.map.getCenter(),
          draggable: true
        })

        this.infoWindow = new google.maps.InfoWindow({
          content: this.$refs.info.$el,
          maxWidth: 260
        })

        // events
        google.maps.event.addListenerOnce(this.map, 'idle', this.openInfoWindow)
        this.marker.addListener('dragstart', this.closeInfoWindow)
        this.marker.addListener('dragend', this.geocodeLocation)
      }
    },

    methods: {
      openInfoWindow () {
        this.infoWindow.open(this.map, this.marker)
      },

      closeInfoWindow () {
        this.infoWindow.close()
      },

      geocodeLocation (e) {
        this.map.panTo(e.latLng)

        this.geocoder.geocode({'latLng': e.latLng}, (response) => {
          if (response && response.length > 0) {
            this.$refs.info.showAddress(response[0])
          } else {
            this.$refs.info.showError()
          }

          this.openInfoWindow()
        })
      }
    }
  }
</script>


<style>
  .LocationPicker,
  .LocationPicker__map {
    height: 100%;
  }

  .LocationPicker > .LocationPicker__info-window {
    display: none;
  }
</style>
