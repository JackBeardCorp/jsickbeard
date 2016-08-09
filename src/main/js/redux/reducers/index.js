import { combineReducers } from 'redux'

import tvshows from './tvshows'
import search from './search'
import timestamps from './timestamps'

export default combineReducers({
  tvshows,
  search,
  timestamps,
})

export * from './search'
export * from './timestamps'
export * from './tvshows'
