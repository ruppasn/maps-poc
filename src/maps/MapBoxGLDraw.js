import React, { useEffect } from 'react';
import initializeMap, { containerId, mapContainerStyle, mapViews } from '../map-config/mapInitializer'
import WithHeader from '../home/WithHeader';
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import 'mapbox-gl/dist/mapbox-gl.css'


const MapBoxGLDraw = () => {

    useEffect(() => {
        const map = initializeMap({
            style: mapViews.satellite
        })

        var Draw = new MapboxDraw({
            displayControlsDefault: false,

            controls: {
                polygon: true,
                trash: true
                }
        });
        
        map.addControl(Draw);

    }, []);

    return <div id={containerId} style={mapContainerStyle}></div>
}

export default WithHeader(MapBoxGLDraw);