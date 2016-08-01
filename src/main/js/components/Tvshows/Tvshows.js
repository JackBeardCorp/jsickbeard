import React, {PropTypes} from 'react'
import Tvshow from '../Tvshow'

const Component = ({tvshows}) => {
  console.log(tvshows);
  return (
    <div className="tvshows">
      {tvshows.map(tvshow => <Tvshow {...tvshow}></Tvshow>)}
    </div>
  )
}

Component.propTypes = {
  tvshows: React.PropTypes.object,
}

export default Component
