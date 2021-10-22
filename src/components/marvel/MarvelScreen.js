import React from 'react'
import PropTypes from 'prop-types'
import HeroesList from '../heroes/HeroesList'

const MarvelScreen = (props) => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <hr/>
      <HeroesList publisher="Marvel Comics"/>
    </div>
  )
}

MarvelScreen.propTypes = {}

export default MarvelScreen
