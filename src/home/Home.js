import React from 'react'
import {Link} from 'react-router-dom'

export default () => {

    return <>
        <div>
            <h3>MapBoxGL Samples</h3>
            <ul>
            <li><Link to="/basic">Basic Map</Link></li>
            <li><Link to="/3d">3D Building Map</Link></li>
            <li><Link to="/points">Points on Map</Link></li>
            <li><Link to="/draw">Using MapBoxGLDraw</Link></li>
            
            </ul>
        </div>
    </>
}