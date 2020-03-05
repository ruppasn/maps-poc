import React from 'react';
import mapboxgl from 'mapbox-gl';

export const containerId = 'containerId';
export const mapContainerStyle = { position: 'absolute', left: 50, top: 50, bottom: 0, height: '500px', width: '900px' };

export const mapViews = {
    satellite: 'mapbox://styles/mapbox/satellite-v9',
    streets: 'mapbox://styles/mapbox/streets-v11',
    light: 'mapbox://styles/mapbox/light-v10'
};

const mapDefaultProps = {
    accessToken: process.env.REACT_APP_MAPBOX_GL_ACCESS_TOKEN,
    container: containerId,
    style: mapViews.streets,
    center: [78.472154, 17.4175971],
    zoom: 12
};

const initializeMap = (props) => {
   return new mapboxgl.Map({
        ...mapDefaultProps,
        ...props
    });
};

export const renderMap = () => <div id={containerId} style={mapContainerStyle}></div>

export default initializeMap;