const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3dhcG5pbDciLCJhIjoiY2s5ZnRtZXh1MGVuYTNkbGNhNWtrcmt0diJ9.fzy5HcciZYupAiuzpVmlWA'


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function setUpMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15
  });
  const navigationControls = new mapboxgl.NavigationControl()
  map.addControl(navigationControls)

  const direnctioControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
  })
  map.addControl(direnctioControls, "top-left")
}

function successLocation(position) {
  setUpMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
  setUpMap([-2.24, 53.48])
}