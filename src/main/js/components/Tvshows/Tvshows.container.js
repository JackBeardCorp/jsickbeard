import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import deburr from 'lodash/deburr'
import lowerCase from 'lodash/lowerCase'

import { getSearch, getTvshows } from 'redux/reducers'
import Component from './Tvshows'

const deburredSearch = createSelector([getSearch], (search) => lowerCase(deburr(search)))
const deburredTvshows = createSelector([getTvshows], (tvshows) =>
  tvshows.map(raw => ({
    raw,
    plain: lowerCase(deburr(JSON.stringify(raw))),
  }))
)

const getFilteredTvShows = createSelector(
  [deburredSearch, deburredTvshows],
  (search, tvshows) =>
    tvshows
      .filter(show => show.plain.includes(search))
      .map(show => show.raw)
)

const mapStateToProps = (state) => ({ tvshows: getFilteredTvShows(state) })

export default connect(mapStateToProps)(Component)
