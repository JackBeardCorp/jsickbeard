export const SET_TVSHOWS = 'SET_TVSHOWS'

export const setTvshows = (tvshows) => {
  return { type: SET_TVSHOWS, tvshows }
}

export const searchTvshows = (search) => {
  return (dispatch) => {
    return fetch('http://37.187.19.83/jackbeard/tvshows?name=' + search + '&lang=fr',
      { headers: { Authorization: 'Basic YWRtaW46STRtSmFjaw==' } })
      .then(r => r.json())
      .then(tvshows => dispatch(setTvshows(tvshows)))
  }
}
