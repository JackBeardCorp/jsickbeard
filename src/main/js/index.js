import 'file?name=[name].[ext]!./index.html'

import React from 'react'
import {render} from 'react-dom'

import App from './components/App'

import store from './store'
import {Provider} from 'react-redux'

const DATAS = require('./stubs/tvshows.json')

// Inits
store.dispatch({
  type: 'SEARCH',
  tvshows : DATAS,
});



render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
