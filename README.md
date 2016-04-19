# Location Picker

## Install via NPM

Available through npm as `vue-location-picker`.
```
npm install --save vue-location-picker
```

## Usage
```js
import LocationPickerInit from 'vue-location-picker/src/init'
import LocationPicker from 'vue-location-picker'

new Vue({
  el: 'body',

  // You need to call the LocationPickerInit(appInstance, configObject, optionsObject)
  ready () {
    LocationPickerInit(
      this,

      // config object
      {
        key: 'GoogleMapsApiKey', // required
        language: 'en-US'        // optional
      },

      // options object
      {
        map: {
          center: { lat: 0, lng: 0 },
          /** other map options **/
        },
        marker: { /** marker options **/ },
        infoWindow: { /** info window options **/ },
        autocomplete: { /** autocomplete options **/ }
      }
    )
  },

  data: {
    place: null // optional
  },

  components: { LocationPicker }
})
```

```html
<!-- If you want to get to the selected place, use the 2-way binding variable -->
<location-picker :place.sync="place"></location-picker>
```

#### Use a custom info window
```html
<!-- MyInfoWindow.vue -->
<template>
  <!-- ... -->
</template>

<script>
  export default {
    // You should implement these 2 methods
    methods: {
      showAddress (place) {
        // ..
      },

      showError () {
        // ..
      }
    }
  }
</script>
```
```js
// MyLocationPicker.js
import LocationPicker from 'vue-location-picker'
import InfoWindow from './MyInfoWindow.vue'

export default Object.assign(LocationPicker, {
  components: { InfoWindow }
})
```
```js
// main.js
import LocationPicker from './MyLocationPicker'

new Vue({
  components: { LocationPicker }
})
```

## License
LocationPicker is released under the MIT License. See the bundled LICENSE file for details.
