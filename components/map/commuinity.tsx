import Map, { Marker } from "react-map-gl";

const CommuinityMap=()=>{
    return(
<Map
mapboxAccessToken="pk.eyJ1IjoiY29kcmVjdCIsImEiOiJjbDF4cnByb3gwNHY0M2NtdHdpMnBvdjJrIn0.hCjjxe_0OXzAWGDIfupAfA"
initialViewState={{
    longitude: -122.4,
    latitude: 37.8,
    zoom: 18,
    bearing:90,
    pitch:90,
  }}
  
  style={{width: '100%', height: '100%'}}
  mapStyle="mapbox://styles/mapbox/streets-v9"
>
<Marker longitude={-122} latitude={37} anchor="bottom" >
      <img src="../public/vercel.svg" />
    </Marker>
</Map>

    )
}

export default CommuinityMap;