import { useState } from "react";
import Map, { Marker } from "react-map-gl";


const CommuinityMap = (props: {
    longitude?: number,
    latitude?: number
}) => {



    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoiY29kcmVjdCIsImEiOiJjbDF4cnByb3gwNHY0M2NtdHdpMnBvdjJrIn0.hCjjxe_0OXzAWGDIfupAfA"
            initialViewState={{
                longitude: props.longitude,
                latitude: props.latitude,
                zoom: 18,
                bearing: 90,
                pitch: 90,

            }}

            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/dark-v10"
        >
            <Marker color="rgb(250 204 21)" longitude={props.longitude ? props.longitude : 0} latitude={props.latitude ? props.latitude : 0} anchor="bottom" />

        </Map>

    )
}

export default CommuinityMap;