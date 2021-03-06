import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from '../shared/routes';
import reducers from '../shared/reducers'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const store = createStore(
  reducers, 
  window.__INITIAL_STATE__, 
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);