const MAP_BOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiamJvbnkiLCJhIjoiY2xmNHcyZHplMHd3ZTNwbGVjejlueDk1YSJ9.DOx_NhvDdkIiHSmq6lZesQ";

var map = new mapboxgl.Map({
  accessToken: MAP_BOX_ACCESS_TOKEN,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setUpMap(centerPositon) {
  const map = new mapboxgl.Map({
    accessToken: MAP_BOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPositon,
    zoom: 13,
  });
  const directionControls = new MapboxDirections({
    accessToken: MAP_BOX_ACCESS_TOKEN,
  });

  map.addControl(directionControls);

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);
}

function successLocation(position) {
  setUpMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setUpMap([-2.24, 53.48]);
}
