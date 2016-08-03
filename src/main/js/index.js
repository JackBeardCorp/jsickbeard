import 'file?name=[name].[ext]!./index.html'

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import store from './redux/store'
import { Provider } from 'react-redux'

import { setTvshows, setSearch, searchTvshows } from 'redux/actions'

import { tvshows } from './stubs/tvshows'
store.dispatch(setTvshows(tvshows))
store.dispatch(searchTvshows('banshee'))

// Inits
store.dispatch(setSearch(''))

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
