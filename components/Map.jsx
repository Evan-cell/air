import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 'calc(100vh - 64px)', // Adjusted the height calculation
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    });

    return (
        <ReactMapGl
            width={viewport.width}
            height={viewport.height}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
            mapStyle='mapbox://styles/gifefe/clps0lhha017u01o0bcvl2crs'
            mapboxAccessToken='pk.eyJ1IjoiZ2lmZWZlIiwiYSI6ImNscHMwMHZjYzBkMnQyaW8xM3E5ZTVvdHIifQ.9Q09ldjmATPNo2w4Uu7OcQ'
            // Add other necessary properties
        />
    );
}

export default Map;
