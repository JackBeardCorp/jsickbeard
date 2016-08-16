import { connect } from 'react-redux'

import { clearTvshows, lazyFetchTvshows, setSearch } from '../../redux/actions'
import Component from './Search'

const mapStateToProps = ({ search: { inProgress } }) => ({ inProgress })

const mapDispatchToProps = (dispatch) => ({
  search: ({ target: { value } }) => {
    // Update search
    dispatch(setSearch(value, true))

    // Fetch
    if (value !== '') {
      dispatch(lazyFetchTvshows(value))
    } else {
      dispatch(clearTvshows())
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
