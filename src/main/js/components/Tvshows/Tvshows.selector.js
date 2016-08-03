import { createSelector } from 'reselect'

const getSearch = (state) => state.search
const getTvshows = (state) => state.tvshows

export const searchTvshows = createSelector(
  [getSearch, getTvshows],
  (search, tvshows) => tvshows.filter((tvshow) => tvshow.name.includes(search))
)
