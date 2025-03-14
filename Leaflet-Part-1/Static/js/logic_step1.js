// We create the tile layer that will be the background of our map.
console.log("Step 1 working");

// We create the tile layer that will be the background of our map.
let basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// We create the map object with options.
let map = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Then we add our 'basemap' tile layer to the map.
basemap.addTo(map);

// Here we make an AJAX call that retrieves our earthquake geoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {

  // This function returns the style data for each of the earthquakes we plot on
  // the map. We pass the magnitude of the earthquake into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
        radius: getRadius(feature.properties.mag),
        fillColor: getColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.8
    };
}
  

  // This function determines the color of the marker based on the magnitude of the earthquake.
  function getColor(depth) {
    return depth > 90 ? "#FF0000" :
    depth > 70 ? "#FF8C00" :
    depth > 50 ? "#FFD700" :
    depth > 30 ? "#ADFF2F" :
    "#7FFF00";
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(magnitude) {
    return magnitude === 0 ? 1 : magnitude * 4;
  }

  // Here we add a GeoJSON layer to the map once the file is loaded.
  L.geoJson(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },

    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`
          <h3>Location: ${feature.properties.place}</h3>
          <hr>
          <p>Magnitude: ${feature.properties.mag}</p>
          <p>Depth: ${feature.geometry.coordinates[2]} km</p>
      `);
    }
  }).addTo(map);

  // Here we create a legend control object.
  let legend = L.control({
    position: "bottomright"
});
  // Then add all the details for the legend
  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");
    let depths = [0, 30, 50, 70, 90];
    let labels = [];

    // Looping through our intervals to generate a label with a colored square for each interval.
    for (let i = 0; i < depths.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
          depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
  }
  return div;
};


  // Finally, we our legend to the map.
  legend.addTo(map);
});