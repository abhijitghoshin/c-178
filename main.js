mapboxgl.accessToken="pk.eyJ1IjoiYWJoaXNoaWt0YSIsImEiOiJja3BhcjdmZjAwdjZnMnZtcHBocXBjZWpkIn0.mCdbBrO1cMhczPsaWviksQ"
let latitude=22.7868542,longitude=88.3643296
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-b11",
center:[longitude,latitude],
zoom:16
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    }),
 
)

map.addControl(
new MapboxDirection({
    accessToken:mapboxgl.accessToken
}),
"top-left"
)