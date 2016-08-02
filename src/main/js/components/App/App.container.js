import { connect } from 'react-redux'

import Component from './App'

const mapStateToProps = ({ tvshows }) => {
  return { ...tvshows }
}

export default connect(mapStateToProps)(Component)
