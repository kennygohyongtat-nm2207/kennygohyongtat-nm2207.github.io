

var map = L.map('map', { center: [1.340960, 103.830139], zoom: 11 });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function colourPopDens(d) {
return d > 35000 ? '#b30000' :
d > 25000 ? '#e34a33' :
d > 20000 ? '#fc8d59' :
d > 10000 ? '#fdcc8a' :
d > 1 ? '#fef0d9' :
 '#fff';
}

function style(feature) {
  return {
    fillColor: colourPopDens(feature.properties.Pop_dens),
    weight: 1,
    opacity: 1,
    color: "black",
    fillOpacity: 0.65
  };
}



// function popUp(feature, layer) {
//  layer.bindPopup(`
//  <b> Subzone: </b> ${feature.properties.SUBZONE_N} <br>
//  <b> Planning Area: </b> ${feature.properties.PLN_AREA_N} <br>
//  <b> Population density: </b> ${(feature.properties.Pop_dens).toFixed(1)} <br>
//  `)
//  layer.on('click', function () { layer.openPopup(); })
//}

//L.geoJSON(singaporePopulation, {
//  style: style,
//  onEachFeature: popUp
// }).addTo(map);



