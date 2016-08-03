import { connect } from 'react-redux'

import Component from './Tvshows'
import { searchTvshows } from './Tvshows.selector'

const mapStateToProps = (state) => {
  return { tvshows: searchTvshows(state) }
}

export default connect(mapStateToProps)(Component)
