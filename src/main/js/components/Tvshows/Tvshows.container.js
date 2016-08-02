import { connect } from 'react-redux'

import Component from './Tvshows'

const mapStateToProps = ({ tvshows }) => {
  return { tvshows }
}

export default connect(mapStateToProps)(Component)
