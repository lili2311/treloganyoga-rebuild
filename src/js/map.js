function initialize_trelogan_yoga_map(lat, lon) {
    map = new google.maps.Map(document.getElementById("map-canvas"), {       
        zoom: 12,
        center: new google.maps.LatLng(lat,lon),
        scrollwheel:  false, 
        title: "Trelogan Yoga Classes",
    });
}
var map;