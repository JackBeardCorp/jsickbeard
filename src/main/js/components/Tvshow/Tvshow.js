import React, { PropTypes } from 'react'

const Component = ({ id, name }) => {
  return (
    <div>
      <h1>{ id }</h1>
      <p>{ name }</p>
    </div>
  )
}

Component.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
}

export default Component
