import React, { PropTypes } from 'react'

const Component = ({ search }) => {
  return (
    <div className="search">
      <input onChange={ search } />
    </div>
  )
}

Component.propTypes = {
  search: PropTypes.func.isRequired,
}

export default Component
