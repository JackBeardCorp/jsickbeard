import React, { PropTypes } from 'react'
import Tvshows from '../Tvshows'

const Component = ({ tvshows }) => {
  return (
    <div className="app">
      <Tvshows {...tvshows} />
    </div>
  )
}

Component.propTypes = {
  tvshows: PropTypes.array,
}

export default Component
