import React from 'react'
import PropTypes from 'prop-types'
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher'

const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <ul>
      {
        heroes.map((hero) => (
          <li key={hero.id}>
            {hero.superhero}
          </li>
        ))
      }
    </ul>
  )
}

HeroesList.propTypes = {
  publisher: (props, propName, componentName) => {
    if (!['DC Comics', 'Marvel Comics'].includes(props[propName])) {
      return new Error(
        `Invalid ${propName} '${props[propName]}' in ${componentName}. It must be 'DC Comics' or 'Marvel Comics'`
      );
    }
  },
}

export default HeroesList
