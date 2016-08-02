import 'file?name=[name].[ext]!./index.html'

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import store from './redux/store'
import { Provider } from 'react-redux'

import { setTvshows } from 'redux/actions'

import { tvshows } from './stubs/tvshows'

// Inits
store.dispatch(setTvshows(tvshows))

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
