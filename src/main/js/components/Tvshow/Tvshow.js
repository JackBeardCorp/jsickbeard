import React, {PropTypes} from 'react'

const Component = (tvshow) => {
  return (
    <div className="tvshow">
      <h1>{tvshow.name}</h1>
    </div>
  )
}

Component.propTypes = {
  tvshow: React.PropTypes.object,
}

export default Component