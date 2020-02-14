import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import routers from './routers'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={routers} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
