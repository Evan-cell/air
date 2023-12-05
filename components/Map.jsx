import React, { useState,useEffect } from 'react';
import ReactMapGl from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

function Map({searchResults}) {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 'calc(100vh - 64px)', // Adjusted the height calculation
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    });
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))
    const center = getCenter(coordinates)

    useEffect(() => {
        // Fetch Mapbox style from the local server
        fetch('/api/mapbox/style/clps0lhha017u01o0bcvl2crs')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          })
          .catch((error) => {
            console.error('Error fetching Mapbox style:', error);
          });
      }, []);
    return (
        <ReactMapGl
            width={viewport.width}
            height={viewport.height}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
            mapStyle='mapbox://styles/gifefe/clps0lhha017u01o0bcvl2crs'
            mapboxAccessToken={process.env.mapbox_key}
            // Add other necessary properties
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
    );
}

export default Map;
