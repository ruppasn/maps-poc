import Building3dData from './geojson/building3D';
import renderBaseMap from '../map-config/MapWrapper';

const Building3DMap = renderBaseMap({
    mapProps: {
        pitch: 45,
        zoom: 17,
        center: [78.447495, 17.4233486]
    },
    onLoad: (map) => {
        var layers = map.getStyle().layers;
        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }
        map.addLayer(Building3dData, labelLayerId);
    }
});

export default Building3DMap;