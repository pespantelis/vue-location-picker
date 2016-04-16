<template>
  <div></div>
</template>


<script>
  export default {
    data () {
      return {
        map: null,
        marker: null
      }
    },

    ready () {
      this.$el.style.height = '100%'
    },

    events: {
      'location-picker-init' () {
        this.map = new google.maps.Map(this.$el, {
          center: {lat: 39.3622, lng: 22.9422},
          zoom: 8,
          disableDefaultUI: true
        })

        this.marker = new google.maps.Marker({
          map: this.map,
          position: this.map.getCenter()
        })
      }
    }
  }
</script>
