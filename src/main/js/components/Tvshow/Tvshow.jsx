import React, { PropTypes } from 'react'
import { Card, CardTitle } from 'react-toolbox/lib/card'

const Component = ({ id, name }) => (
  <Card style={{ width: '350px' }}>
    <CardTitle id={id} title={name} />
  </Card>
)

Component.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default Component
