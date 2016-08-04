export const initState = ''
export const initAction = { type: 'INIT_ACTION' }

import { SET_SEARCH } from '../../actions'

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.search
    default:
      return state
  }
}
