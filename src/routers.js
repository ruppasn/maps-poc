import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Map from './map/Map';

const Routes = () => (
    <Switch>
        <Route path="/" component={Map} />
        <Route path="/map" component={Map} />
    </Switch>
)

export default Routes;