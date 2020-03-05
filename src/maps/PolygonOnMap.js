import { mapViews } from '../map-config/initialConfig';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import renderBaseMap from '../map-config/MapWrapper';

const polygon = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Polygon',
            'coordinates': [
                [
                    [78.445340, 17.429661],
                    [78.461729, 17.424774],
                    [78.441847, 17.417005],
                    [78.476950, 17.438881]
                ]
            ]
        }
    }
};

const polygonStyle = {
    'id': 'maine',
    'type': 'fill',
    'source': 'maine',
    'layout': {},
    'paint': {
        'fill-color': '#36e87f',
        'fill-opacity': 0.5
    }
};

const PolygonOnMap = renderBaseMap({
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
    },
    onLoad: (map) => {
        map.addSource('maine', polygon);
        map.addLayer(polygonStyle);
    }

});

export default PolygonOnMap;