import { useEffect, useRef } from 'react';
import initializeMap, { renderMap } from './initialConfig';
import WithHeader from '../home/WithHeader';

const BaseMap = ({ mapProps, onLoad, onInit }) => {

    const onLoadRef = useRef(onLoad);
    const onInitRef = useRef(onInit);

    useEffect(() => {
        const map = initializeMap(mapProps);
        onLoadRef.current && map.on('load', function () {
            onLoadRef.current(map);
        });
        onInitRef.current && onInitRef.current(map);
    }, [mapProps, onLoadRef, onInitRef]);

    return renderMap();
}

export default WithHeader(BaseMap);