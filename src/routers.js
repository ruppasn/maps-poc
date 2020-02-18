import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MapBoxGlMap from './maps/BasicMap';
import Home from './home/Home';
import Building3DMap from './maps/Building3DMap';
import MapWithPointer from './maps/MapWithPointer';
import MapBoxGLDraw from './maps/MapBoxGLDraw';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/basic" component={MapBoxGlMap} />
        <Route path="/3d" component={Building3DMap} />
        <Route path="/points" component={MapWithPointer} />
        <Route path="/draw" component={MapBoxGLDraw} />
    </Switch>
)

export default Routes;