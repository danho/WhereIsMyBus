window.onload = function() {

  var socket = io.connect("http://localhost:5000");

  socket.on('init', function(data) {
    for (i=0; i<data.message.bus.length; i++) {
      addMarker(data.message.bus[i].lat, data.message.bus[i].lng, data.message.bus[i].VehicleID);
    }
  });

  socket.on('delta', function(data) {
    for (i=0; i<data.message.bus.length; i++) {
      updateMarker(data.message.bus[i].lat, data.message.bus[i].lng, data.message.bus[i].VehicleID);
    }
  });
}
