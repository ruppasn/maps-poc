import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './rootReducer';

const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
}

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
)

export default store;