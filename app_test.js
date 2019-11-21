// Create our initial map object
// Set the longitude, latitude, and the starting zoom level


const API_KEY="pk.eyJ1Ijoibmd1eWVubmR0Mjc4IiwiYSI6ImNrMnJybGZhOTBjbGQzY3BydDEwaHo1OGwifQ.ZhZaBM1hCCpn9xosyWRs_A";

var myMap = L.map("map", {
	center: [29.7412036, -95.37475],
	zoom: 13
  });
  
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	maxZoom: 18,
	id: "mapbox.streets",
	accessToken: "pk.eyJ1Ijoibmd1eWVubmR0Mjc4IiwiYSI6ImNrMnJybGZhOTBjbGQzY3BydDEwaHo1OGwifQ.ZhZaBM1hCCpn9xosyWRs_A"
  }).addTo(myMap);
  
  // Create a new marker
  // Pass in some initial options, and then add it to the map using the addTo method
  var marker = L.marker([29.7412036, -95.37475], {
	draggable: true,
	title: "My First Marker"
  }).addTo(myMap);
  
  // Binding a pop-up to our marker
  marker.bindPopup("Hello There!");
  