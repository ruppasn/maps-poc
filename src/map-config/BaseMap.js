import { useEffect } from 'react';
import initializeMap, { renderMap } from './initialConfig';
import WithHeader from '../home/WithHeader';

const BaseMap = ({ mapProps, onLoad, onInit }) => {

    useEffect(() => {
        const map = initializeMap(mapProps);
        onLoad && map.on('load', function () {
            onLoad(map);
        });
        onInit && onInit(map);
    }, [mapProps, onLoad, onInit]);

    return renderMap();
}

export default WithHeader(BaseMap);