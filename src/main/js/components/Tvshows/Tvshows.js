import React, { PropTypes } from 'react'
import Tvshow from '../Tvshow'

const Component = ({ tvshows }) => {
  return (
    <div className="tvshows">
      { tvshows.map(tvshow => <Tvshow { ...tvshow } />) }
    </div>
  )
}

Component.propTypes = {
  tvshows: PropTypes.array,
}

export default Component
