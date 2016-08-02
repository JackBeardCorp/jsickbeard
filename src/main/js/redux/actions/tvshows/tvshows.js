export const SET_TVSHOWS = 'SET_TVSHOWS'
export const FILTER_TVSHOWS = 'FILTER_TVSHOWS'

export const setTvshows = (tvshows) => {
  return {
    type: SET_TVSHOWS,
    tvshows,
  }
}

export const filterTvshows = (filter) => {
  return {
    type: FILTER_TVSHOWS,
    filter,
  }
}
