
var map = L.map('mapid').setView([35.62493, -82.57269], 10.69);

L.tileLayer('https://api.mapbox.com/styles/v1/bsowka/cjsk5mt8s2yp01gp6jq7fkz07/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnNvd2thIiwiYSI6ImNqcjBzaXR1NDBzYnY0YWxzaDdrajQ1NHYifQ.HTlG0daGz_x9u2dC_sMvig', {
}).addTo(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("This is what the current mbps for this area is:" )
        .openOn(map);
}
map.on('click', onMapClick);
