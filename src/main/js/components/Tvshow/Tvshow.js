import React, { PropTypes } from 'react'

const Component = ({ id, name }) => {
  return (
    <div className="tvshow">
      <h1>{ id }</h1>
      <p>{ name }</p>
    </div>
  )
}

Component.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}

export default Component
