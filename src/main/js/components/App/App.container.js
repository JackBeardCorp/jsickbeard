import { connect } from 'react-redux'

import Component from './App'

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Component)
