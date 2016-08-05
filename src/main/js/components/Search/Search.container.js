import { connect } from 'react-redux'
import { clearTvshows, fetchTvshows } from '../../redux/actions'
import Component from './Search'

const mapStateToProps = ({ search }) => ({ search })

const mapDispatchToProps = (dispatch) => ({
  search: ({ target: { value } }) =>
    value !== '' ? dispatch(fetchTvshows(value)) : dispatch(clearTvshows()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
