var map = null;
var markers = new Array();

function init() {
  var mapOptions = {
    center: new google.maps.LatLng(39.951719, -75.163877),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function addMarker(lat, lng) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    map: map
  });

  markers.push(marker);
}

google.maps.event.addDomListener(window, 'load', init);
