export const initState = []
export const initAction = { type: 'INIT_ACTION' }

import { FETCH_TVSHOWS } from '../../actions'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case FETCH_TVSHOWS:
      return action.tvshows
    default:
      return state
  }
}
