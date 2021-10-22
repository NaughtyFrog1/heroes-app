import React from 'react'
import PropTypes from 'prop-types'
import HeroesList from '../heroes/HeroesList'

const DcScreen = (props) => {
  return (
    <div>
      <h1>DC Screen</h1>
      <hr/>
      <HeroesList publisher="DC Comics"/>
    </div>
  )
}

DcScreen.propTypes = {}

export default DcScreen
