var map = L.map('mapid').setView([35.399, -83.26], 8.69);


function mapSwitch(){
	if (document.getElementById("map1").checked){
			
			//1: mapbox://styles/mwilson3/cjsby78bq183u1fqmv6e35utx
			L.tileLayer('https://api.mapbox.com/styles/v1/mwilson3/cjsby78bq183u1fqmv6e35utx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXdpbHNvbjMiLCJhIjoiY2pyMHNrMHR5MHNmeTN5cXF4cmk0dTNpaiJ9.IrVUHrCHf8jdwV9RcYym_w', {
			}).addTo(map);
			
			console.log("map 1 is checked and loaded");
	
	} else if 
		(document.getElementById("map2").checked){
			
			//2: mapbox://styles/mwilson3/
			L.tileLayer('https://api.mapbox.com/styles/v1/mwilson3/cjsbs2l9c189c1ftbrzrrlk30/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXdpbHNvbjMiLCJhIjoiY2pyMHNrMHR5MHNmeTN5cXF4cmk0dTNpaiJ9.IrVUHrCHf8jdwV9RcYym_w', {
			}).addTo(map);
			
			console.log("map 2 is checked and loaded");
			
	} else if 
		(document.getElementById("map3").checked){
			
			//3: mapbox://styles/mwilson3/cjsbs6amg15801go76ls8btsf
			L.tileLayer('https://api.mapbox.com/styles/v1/mwilson3/cjsbs6amg15801go76ls8btsf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXdpbHNvbjMiLCJhIjoiY2pyMHNrMHR5MHNmeTN5cXF4cmk0dTNpaiJ9.IrVUHrCHf8jdwV9RcYym_w', {
			}).addTo(map);
			
			console.log("map 3 is checked and loaded");
			
	} else if 
		(document.getElementById("map4").checked){
			
			//4: mapbox://styles/mwilson3/cjsbs6ifr0in81gtla5dxk7vr
			L.tileLayer('https://api.mapbox.com/styles/v1/mwilson3/cjsbs6ifr0in81gtla5dxk7vr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXdpbHNvbjMiLCJhIjoiY2pyMHNrMHR5MHNmeTN5cXF4cmk0dTNpaiJ9.IrVUHrCHf8jdwV9RcYym_w', {
			}).addTo(map);
			
			console.log("map 4 is checked and loaded");
			
	} else {
		console.error("The Map Switching Mechanic is Broken.");
	}
}

mapSwitch();



