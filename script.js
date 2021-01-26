var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
}).addTo(mymap);
var layerGroup=L.layerGroup().addTo(mymap);

mymap.on('click',function(e) {
  var poplocation=e.latlng;
  var marker=L.marker([e.latlng.lat,e.latlng.lng]).addTo(mymap);
  
});

function testFunction(){
  layerGroup.clearLayers();
  mymap.closePopup();
  marker=L.marker([10.088, 34.556]).addTo(layerGroup);
  marker.bindPopup("Assosa University Library").openPopup();
}