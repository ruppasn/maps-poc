import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_GL_ACCESS_TOKEN;

const mapContainerStyle = { position: 'absolute', left: 50, top: 50, bottom: 0, height: '500px', width: '900px' }

const OpenMap = (props) => {

    useEffect(() => {
        var map = new mapboxgl.Map({
            container: 'mapContainer',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [78.47, 17.41],
            zoom: 9
        });

        map.on('load', (event) => {
            console.log('event', event)
        });
    }, []);


    return <>
        {props.msg}
        <br />
        <div id="mapContainer" style={mapContainerStyle}></div>
    </>
}

const mapStateToProps = (state) => ({
    msg: state.map.test
})

export default connect(mapStateToProps)(OpenMap);