import { mapViews } from '../map-config/initialConfig';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import renderBaseMap from '../map-config/MapWrapper';

const MapBoxGLDraw = renderBaseMap({
    mapProps: {
        style: mapViews.satellite
    },
    onInit: (map) => {
        var Draw = new MapboxDraw({
            displayControlsDefault: false,
            controls: {
                polygon: true,
                trash: true
            }
        });
        map.addControl(Draw);
    }
});

export default MapBoxGLDraw;