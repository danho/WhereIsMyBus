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

function addMarker(lat, lng, id) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    map: map,
    title: id
  });
  markers.push(marker);
}

function updateMarker(lat, lng, id) {
  for (i=0; i<markers.length; i++) {
    if (markers[i].title == id) {
      var marker_lat = markers[i].getPosition().lat();
      var marker_lng = markers[i].getPosition().lng();

      if (marker_lat == lat && marker_lng == lng) {
        break;
      } else {
        markers.splice(i, 1);
        addMarker(lat, lng, id);
        break;
      }
    }
  }
}

google.maps.event.addDomListener(window, 'load', init);
