import { connect } from 'react-redux'
import { filterTvshows } from '../../redux/actions'
import Component from './Filter'

const mapStateToProps = ({ tvshows }) => {
  return { tvshows }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (e) => dispatch(filterTvshows(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
