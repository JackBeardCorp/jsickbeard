/* eslint-env browser */
import { getSearch, getTimestamps } from '../../reducers'

import { setSearch } from '../../actions'

export const SET_TVSHOWS = 'SET_TVSHOWS'
export const setTvshows = (tvshows) => ({ type: SET_TVSHOWS, tvshows })

export const CLEAR_TVSHOWS = 'CLEAR_TVSHOWS'
export const clearTvshows = () => dispatch => {
  dispatch({ type: CLEAR_TVSHOWS })
  // Stop circular progress on search box.
  dispatch(setSearch('', false))
}

export const FETCH_TVSHOWS = 'FETCH_TVSHOWS'
export const fetchTvshows = ({ text }) => dispatch => {
  dispatch({ type: FETCH_TVSHOWS, timestamp: (new Date().getTime()) })

  fetch(`http://37.187.19.83/jackbeard/tvshows?name=${text}&lang=fr`,
    { headers: { Authorization: 'Basic YWRtaW46STRtSmFjaw==' } })
    .then(r => r.json())
    .then(tvshows => dispatch(setTvshows(tvshows)))
    // Stop circular progress on search box.
    .then(() => dispatch(setSearch(text, false)))
}

let timeout
export const lazyFetchTvshows = () => (dispatch, getState) => {
  // Cancel previous timeout
  if (timeout) clearTimeout(timeout)

  const timestamps = getTimestamps(getState())
  const search = getSearch(getState())

  // TVShows are never getting fetched : don't wait
  if (!timestamps.FETCH_TVSHOWS) {
    dispatch(fetchTvshows(search))
    return
  }

  const time = (new Date().getTime())
  const typeTimer = (timestamps.SET_SEARCH + 200) - time
  const fetchTimer = (timestamps.FETCH_TVSHOWS + 1000) - time

  // Research if user didn't write for 0.5s or last search was 1s ago
  if (typeTimer <= 0 || fetchTimer <= 0) {
    dispatch(fetchTvshows(search))
  }

  // Wait for the tinier timer (if needed)
  if (typeTimer > 0) {
    const timer = Math.min(
      (typeTimer > 0 ? typeTimer : 10000),
      (fetchTimer > 0 ? fetchTimer : 10000)
    )
    timeout = setTimeout(
      () => dispatch(lazyFetchTvshows()),
      timer
    )
  }
}
