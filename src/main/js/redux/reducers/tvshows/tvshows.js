export const initState = []
export const initAction = { type: 'INIT_ACTION' }

import { SET_TVSHOWS, CLEAR_TVSHOWS } from '../../actions'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_TVSHOWS:
      return action.tvshows
    case CLEAR_TVSHOWS:
      return initState
    default:
      return state
  }
}
