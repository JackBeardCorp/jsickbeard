import { SET_SEARCH, FETCH_TVSHOWS } from '../../actions'

export const initState = {}
export const initAction = { type: 'INIT_ACTION' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case FETCH_TVSHOWS:
    case SET_SEARCH: {
      if (!action.timestamp) return state

      return {
        ...state,
        [action.type]: action.timestamp,
      }
    }
    default:
      return state
  }
}
