import { createSelector } from 'reselect'

const getSearch = (state) => state.search
const getTvshows = (state) => state.tvshows

export const searchTvshows = createSelector(
  [getSearch, getTvshows],
  (search, tvshows) => {
    fetch('http://37.187.19.83/jackbeard/tvshows?name=banshee&lang=fr',
      { headers: { Authorization: 'Basic YWRtaW46STRtSmFjaw==' } })
      .then((r) => r.json())
      .then((tvshows) => {
        return tvshows.filter((tvshow) => tvshow.name.includes(search))
      })
  }
)
