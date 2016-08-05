import { createSelector } from 'reselect'

const getSearch = ({ search }) => search
const getTvshows = ({ tvshows }) => tvshows

export const selectTvshows = createSelector(
  [getSearch, getTvshows],
  (search, tvshows) => tvshows
)
