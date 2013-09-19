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

  // console.log(marker.title);

  markers.push(marker);
}

function updateMarker(lat, lng, id) {
  for (i=0; i<markers.length; i++) {
    if (markers[i].title == id) {
      if (markers[i].lat == lat && markers[i].lng == lng) {
        break;
      } else {
        markers[i].setPosition(new google.maps.LatLng(lat, lng));
        map.panTo(new google.maps.LatLng(lat, lng));
        break;
      }
    }
  }
}

google.maps.event.addDomListener(window, 'load', init);
