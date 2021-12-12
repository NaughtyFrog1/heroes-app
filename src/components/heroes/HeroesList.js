import React, { useMemo } from 'react'
import getHeroesByPublisher from '../../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroesList = ({ publisher }) => {
  // getHeroesByPublisher(...) se dispara solo cuando cambia el publisher
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row row-cols-auto g-4 mb-5 justify-content-center animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <div className="col" key={hero.id}>
          <HeroCard {...hero} />
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
