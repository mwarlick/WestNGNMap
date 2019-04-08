var map = L.map('mapid').setView([35.62493, -82.57269], 12.69);
map.scrollWheelZoom.disable();

//This Function is an if then that allows cycling between different maps.
function mapSwitch(){
	if (document.getElementById("map1").checked){
			
		//The default map goes here~!
			L.tileLayer('https://api.mapbox.com/styles/v1/bsowka/cju5xvmx418p11fqeel1ag352/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnNvd2thIiwiYSI6ImNqcjBzaXR1NDBzYnY0YWxzaDdrajQ1NHYifQ.HTlG0daGz_x9u2dC_sMvig', {	
			}).addTo(map);

			console.log("map 1 is checked and loaded");
	
	} else if 
		(document.getElementById("service").checked){
			
			L.tileLayer('https://api.mapbox.com/styles/v1/bsowka/cju5zvl405hs41fmt3edxxej9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnNvd2thIiwiYSI6ImNqcjBzaXR1NDBzYnY0YWxzaDdrajQ1NHYifQ.HTlG0daGz_x9u2dC_sMvig', {
			}).addTo(map);
			
			console.log("map 2 is checked and loaded");
			
	} else if 
		(document.getElementById("map3").checked){
			
			L.tileLayer('https://api.mapbox.com/styles/v1/mwilson3/cjsbs6amg15801go76ls8btsf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXdpbHNvbjMiLCJhIjoiY2pyMHNrMHR5MHNmeTN5cXF4cmk0dTNpaiJ9.IrVUHrCHf8jdwV9RcYym_w', {
			}).addTo(map);
			
			console.log("map 3 is checked and loaded");
			
	} else if 
		(document.getElementById("map4").checked){
			
			L.tileLayer('https://api.mapbox.com/styles/v1/mwilson3/cjsbs6ifr0in81gtla5dxk7vr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXdpbHNvbjMiLCJhIjoiY2pyMHNrMHR5MHNmeTN5cXF4cmk0dTNpaiJ9.IrVUHrCHf8jdwV9RcYym_w', {
			}).addTo(map);
			
			console.log("map 4 is checked and loaded");
			
	} else {
		console.error("The Map Switching Mechanic is Broken.");
	}
}


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("This is the current mbps for this area is:" )
        .openOn(map);
}
map.on('click', onMapClick);
document.getElementById("map1").setAttribute("checked", true);
mapSwitch();

