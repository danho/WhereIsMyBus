var map = null;
var markers = new Array();

function init() {
  var mapOptions = {
    center: new google.maps.LatLng(39.951719, -75.163877),
    zoom: 13,
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
        attachWindow(markers[markers.length-1], marker_lat, lat, marker_lng, lng);
        break;
      }
    }
  }
}

function attachWindow(marker, old_lat, new_lat, old_lng, new_lng) {
  var contentString = '<div id="content">Old latitude: ' + old_lat + '<br/>New latitude: ' + new_lat + '<br/>Old longitude:' + old_lng + '<br/>New longitude:' + new_lng + '</h4>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  infowindow.open(marker.get('map'), marker);
  setTimeout(function() { infowindow.close(); }, '7000');
}

google.maps.event.addDomListener(window, 'load', init);
