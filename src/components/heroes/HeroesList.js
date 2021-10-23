import React from 'react'
import PropTypes from 'prop-types'
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <div className="row row-cols-auto">
      {heroes.map((hero) => (
        <div className="col">
          <HeroCard key={hero.id} {...hero} />
        </div>
      ))}
    </div>
  )
}

HeroesList.propTypes = {
  publisher: (props, propName, componentName) => {
    if (!['DC Comics', 'Marvel Comics'].includes(props[propName])) {
      return new Error(
        `Invalid ${propName} '${props[propName]}' in ${componentName}. It must be 'DC Comics' or 'Marvel Comics'`
      )
    }
  },
}

export default HeroesList
