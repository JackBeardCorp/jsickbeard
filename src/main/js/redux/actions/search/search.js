export const SET_SEARCH = 'SET_SEARCH'

export const setSearch = (text, inProgress) => ({ type: SET_SEARCH, text, inProgress, timestamp: new Date().getTime() })
