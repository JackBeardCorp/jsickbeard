import { connect } from 'react-redux'

import Component from './Tvshows'
import { selectTvshows } from './Tvshows.selector'

const mapStateToProps = (state) => ({ tvshows: selectTvshows(state) })

export default connect(mapStateToProps)(Component)
