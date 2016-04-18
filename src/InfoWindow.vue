<template>
  <div>
    <strong>{{title}}</strong>
    <p>{{body}}</p>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        title: 'Instructions',
        body: 'Click and drag this marker to pick your location.'
      }
    },

    methods: {
      showAddress (place) {
        this.title = 'My address'
        this.body = place.formatted_address
      },

      showError () {
        this.title = 'Oups'
        this.body = 'Google Maps could not determine the approximate postal address of this location.'
      }
    }
  }
</script>


<style scoped>
  div {
    font-family: monospace;
    color: #333;
  }

  p {
    margin-bottom: 0;
  }
</style>
