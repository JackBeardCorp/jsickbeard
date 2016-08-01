import React, { PropTypes } from 'react'
import Tvshows from '../Tvshows'

const Component = (datas) => {
  return (
    <div className="app">
      <Tvshows {...datas} ></Tvshows>
    </div>
  )
}

export default Component
