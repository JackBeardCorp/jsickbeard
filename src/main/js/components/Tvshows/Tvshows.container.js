import { connect } from 'react-redux'

import Component from './Tvshows'

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Component)
