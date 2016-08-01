export const initState = {}
export const initAction = { type: 'INIT_ACTION' }

import { SEARCH, FAIL_SEARCH } from '../actions/tvshows.action'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SEARCH: return {
      ...state
    }
    case FAIL_SEARCH:
    default: return state
  }
}
