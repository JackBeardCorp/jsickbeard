export const initState = {}
export const initAction = { type: 'INIT_ACTION' }

import { SET_TVSHOWS, FILTER_TVSHOWS } from '../../actions'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_TVSHOWS:
      return action.tvshows
    case FILTER_TVSHOWS:
      return state.filter(({ name }) => name.includes(action.filter))
    default:
      return state
  }
}
