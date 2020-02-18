import React, { useEffect } from 'react';
import initializeMap, { containerId, mapContainerStyle } from '../map-config/mapInitializer'
import WithHeader from '../home/WithHeader';

const MapBoxGlMap = () => {

    useEffect(() => {
        initializeMap()
    }, []);

    return <div id={containerId} style={mapContainerStyle}></div>
}

export default WithHeader(MapBoxGlMap);