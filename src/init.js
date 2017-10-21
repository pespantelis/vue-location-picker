import Vue from 'vue'
import LocationPicker from './LocationPicker.vue'

LocationPicker.install = function (Vue, options) {
    console.log(options);
    if (! options || !options.key) {
        console.error('[Vue Location Picker warn]: You should give a Google Maps API key')
        return
    }

    options.libraries = 'places';
    options.callback = 'initLocationPicker';

    // set the global event bus
    global.vueLocationPickerEventBus = new Vue();

    // set the callback function
    global.initLocationPicker = () => {
        global.vueLocationPickerEventBus.$emit('location-picker-init')
    };

    // construct the url
    var apiUrl = 'https://maps.googleapis.com/maps/api/js';
    var params = Object.keys(options).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`);
    var url = `${apiUrl}?${params.join('&')}`;

    // create and append the script to body
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}
export default LocationPicker;

