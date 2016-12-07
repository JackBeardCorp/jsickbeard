import { connect } from 'react-redux'

import { clearTvshows, lazyFetchTvshows, setSearch } from '../../redux/actions'
import Component from './Search'

const mapDispatchToProps = (dispatch) => ({
  search: ({ target: { value } }) => {
    // Update search
    dispatch(setSearch(value))

    // Fetch
    if (value !== '') {
      dispatch(lazyFetchTvshows(value))
    } else {
      dispatch(clearTvshows())
    }
  },
})

export default connect(undefined, mapDispatchToProps)(Component)
