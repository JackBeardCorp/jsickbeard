export const FETCH_TVSHOWS = 'FETCH_TVSHOWS'

export const fetchTvshows = (tvshows) => {
  return { type: FETCH_TVSHOWS, tvshows }
}

export const searchTvshows = (search) => {
  return (dispatch) => {
    return fetch('http://37.187.19.83/jackbeard/tvshows?name=' + search + '&lang=fr',
      { headers: { Authorization: 'Basic YWRtaW46STRtSmFjaw==' } })
      .then(r => r.json())
      .then(tvshows => dispatch(fetchTvshows(tvshows)))
  }
}
