import React, { PropTypes } from 'react'
import Input from 'react-toolbox/lib/input'

const Component = ({ search }) => {
  return (
    <div>
      <Input type="text" label="Recherche" icon="search" onChange={ search } />
    </div>
  )
}

Component.propTypes = {
  search: PropTypes.func.isRequired,
}

export default Component
