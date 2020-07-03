import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import '../styles/mapbox.css'

mapboxgl.accessToken = "pk.eyJ1IjoiZnJvbW1haW5sYW5kIiwiYSI6ImNqM3RsNTJvOTAwZmIzM3I3MXp4bmxsenIifQ.WY90nn8ztEOTz5y67Pyjug";


export default function Worldmap() {
    const mapContainerRef = useRef(null);

    // initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // See style options here: https://docs.mapbox.com/api/maps/#styles
            style: 'mapbox://styles/frommainland/ckc23phx66leq1io95xnt9klq',
            center: [27.693, 15.946],
            zoom: 2.0,
        });

        // add navigation control (the +/- zoom buttons)
        // map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        // clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            className="map-container"
            ref={mapContainerRef}
            style={{
                height: "100vh",
                width: '100vw',
                position: 'fixed'
            }}
        />
    )
}
