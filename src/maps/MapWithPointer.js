import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import point from '../map-config/geojson/point'
import pointStyle from '../map-config/geojson/pointStyle';
import initializeMap, { containerId, mapContainerStyle } from '../map-config/mapInitializer'
import WithHeader from '../home/WithHeader';

const MapWithPoints = (props) => {

    useEffect(() => {
        const map = initializeMap()
        map.on('load', function () {
            map.addSource('points', point);
            map.addLayer(pointStyle);
        });
    }, []);

    return <>
        {props.msg}:
        <div id={containerId} style={mapContainerStyle}></div>
    </>
}

const mapStateToProps = (state) => ({
    msg: state.map.test
})

export default connect(mapStateToProps)(WithHeader(MapWithPoints));