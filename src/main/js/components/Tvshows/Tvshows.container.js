import { connect } from 'react-redux'

import Component from './Tvshows'

const mapStateToProps = ({ tvshows, search }) => {
  return { tvshows: tvshows.filter((tvshow) => tvshow.name.includes(search)) }
}

export default connect(mapStateToProps)(Component)
