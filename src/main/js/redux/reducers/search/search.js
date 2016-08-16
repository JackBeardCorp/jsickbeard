import { SET_SEARCH } from '../../actions'

export const initState = { text: '', inProgress: false }
export const initAction = { type: 'INIT_ACTION' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_SEARCH:
      return { text: action.text, inProgress: action.inProgress }
    default:
      return state
  }
}
