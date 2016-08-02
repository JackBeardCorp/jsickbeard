import 'file?name=[name].[ext]!./index.html'

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import store from './redux/store'
import { Provider } from 'react-redux'

import { SET_TVSHOWS } from 'redux/actions'

const TVSHOWS = require('./stubs/tvshows.json')

// Inits
store.dispatch({
  type: SET_TVSHOWS,
  tvshows: TVSHOWS,
})

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
