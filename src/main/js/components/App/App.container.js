import { connect } from 'react-redux'

import Component from './App'

const mapStateToProps = ({ tvshows }) => tvshows

export default connect(mapStateToProps)(Component)
