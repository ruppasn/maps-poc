import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import initializeMap, { containerId, mapContainerStyle } from '../map-config/mapInitializer'
import WithHeader from '../home/WithHeader';

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

            map.addLayer(
                {
                    'id': '3d-buildings',
                    'source': 'composite',
                    'source-layer': 'building',
                    'filter': ['==', 'extrude', 'true'],
                    'type': 'fill-extrusion',
                    'minzoom': 15,
                    'paint': {
                        'fill-extrusion-color': '#aaa',

                        // use an 'interpolate' expression to add a smooth transition effect to the
                        // buildings as the user zooms in
                        'fill-extrusion-height': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'height']
                        ],
                        'fill-extrusion-base': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'min_height']
                        ],
                        'fill-extrusion-opacity': 0.6
                    }
                },
                labelLayerId
            );
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