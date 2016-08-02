export const SET_TVSHOWS = 'SET_TVSHOWS'

const TVSHOWS = require('../../../stubs/tvshows.json')

export const setTvshows = () => {
  return {
    type: SET_TVSHOWS,
    tvshows: TVSHOWS,
  }
}
