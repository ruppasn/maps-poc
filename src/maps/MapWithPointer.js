import point from './geojson/point';
import pointStyle from './geojson/pointStyle';
import renderBaseMap from '../map-config/MapWrapper';

const MapWithPointer = renderBaseMap({
    onLoad: (map) => {
        map.addSource('points', point);
        map.addLayer(pointStyle);
    }
});

export default MapWithPointer;
