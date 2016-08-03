import { connect } from 'react-redux'
import { setSearch } from '../../redux/actions'
import Component from './Search'

const mapStateToProps = ({ search }) => {
  return { search }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (e) => dispatch(setSearch(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
