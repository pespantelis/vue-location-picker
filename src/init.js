module.exports = (app, config, options) => {
  if (!config.key) {
    console.error('[Vue Location Picker warn]: You should give a Google Maps API key')
    return
  }

  config.libraries = 'places'
  config.callback = 'initLocationPicker'

  // set the callback function
  global.initLocationPicker = () => {
    app.$broadcast('location-picker-init', options || {})
  }

  // construct the url
  var apiUrl = 'https://maps.googleapis.com/maps/api/js'
  var params = Object.keys(config).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(config[key])}`)
  var url = `${apiUrl}?${params.join('&')}`

  // create and append the script to body
  var script = document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  document.body.appendChild(script)
}
