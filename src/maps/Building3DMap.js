import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import initializeMap, { containerId, mapContainerStyle } from '../map-config/mapInitializer'
import WithHeader from '../home/WithHeader';
import Building3dData from '../map-config/geojson/building3D'
const Building3dMap = () => {

    useEffect(() => {
        const map = initializeMap({
            pitch: 45,
            zoom: 17,
            center: [78.447495, 17.4233486]
        })

        map.on('load', function () {
            var layers = map.getStyle().layers;

            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }

            map.addLayer(Building3dData, labelLayerId);
        });
    }, []);

    return <>
        3D Map:
        <div id={containerId} style={mapContainerStyle}></div>
    </>
}

const mapStateToProps = (state) => ({
    msg: state.map.test
})

export default connect(mapStateToProps)(WithHeader(Building3dMap));