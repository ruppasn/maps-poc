import React from 'react';
import BaseMap from './BaseMap';

const renderBaseMap = (mapConfig) => () => {
    return <BaseMap {...mapConfig} />
};

export default renderBaseMap;