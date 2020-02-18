import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MapBoxGlMap from './maps/BasicMap';
import Home from './home/Home';
import Building3DMap from './maps/Building3DMap';
import MapWithPointer from './maps/MapWithPointer';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/basic" component={MapBoxGlMap} />
        <Route path="/3d" component={Building3DMap} />
        <Route path="/points" component={MapWithPointer} />
    </Switch>
)

export default Routes;