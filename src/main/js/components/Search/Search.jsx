import React, { PropTypes } from 'react'
import { FontIcon, ProgressBar } from 'react-toolbox'
import { searchBox } from './Search.scss'
const Component = ({ search, inProgress }) => {
  return (
    <div className={searchBox}>
      { inProgress
        ? <ProgressBar type="circular" mode="indeterminate" multicolor className=""/>
        : <FontIcon value="search"/>
      }
      <input className="material-icons " type="text" label="Recherche" icon="search" onChange={search} placeholder="Rechercher"/>
    </div>
  )
}

Component.propTypes = {
  search: PropTypes.func.isRequired,
  inProgress: PropTypes.bool,
}

export default Component
