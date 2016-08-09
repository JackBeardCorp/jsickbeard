import React from 'react'
import AppBar from 'react-toolbox/lib/app_bar'
import Tvshows from '../Tvshows'
import Search from '../Search'

const Component = () => {
  return (
    <div className="app">
      <AppBar fixed >
        <Search />
      </AppBar>
      <Tvshows />
    </div>
  )
}

export default Component
