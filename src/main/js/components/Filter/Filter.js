import React, { PropTypes } from 'react'

const Component = ({ filter }) => {
  return (
    <div className="filter">
      <input onChange={ filter } />
    </div>
  )
}

Component.propTypes = {
  filter: PropTypes.func.isRequired,
}

export default Component
