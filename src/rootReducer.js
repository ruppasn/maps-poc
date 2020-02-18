import { combineReducers } from 'redux'
import mapBoxGlMapReducer from './maps/mapReducer'

export default combineReducers({
    map: mapBoxGlMapReducer
})