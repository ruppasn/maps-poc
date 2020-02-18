import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import initializeMap, { containerId, mapContainerStyle } from '../map-config/mapInitializer'
import WithHeader from '../home/WithHeader';

const BasicMapWithRedux = (props) => {

    useEffect(() => {
        initializeMap()
    }, []);

    return <>
        {props.msg}:
        <div id={containerId} style={mapContainerStyle}></div>
    </>
}

const mapStateToProps = (state) => ({
    msg: state.map.test
})

export default connect(mapStateToProps)(WithHeader(BasicMapWithRedux));