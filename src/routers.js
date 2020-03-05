import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home';
import Building3DMap from './maps/Building3DMap';
import MapWithPointer from './maps/MapWithPointer';
import MapBoxGLDraw from './maps/MapBoxGLDraw';
import BasicMap from './maps/BasicMap';
import PolygonOnMap from './maps/PolygonOnMap';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/basic" component={BasicMap} />
        <Route path="/3d" component={Building3DMap} />
        <Route path="/points" component={MapWithPointer} />
        <Route path="/draw" component={MapBoxGLDraw} />
        <Route path="/showploygon" component={PolygonOnMap} />
    </Switch>
)

export default Routes;