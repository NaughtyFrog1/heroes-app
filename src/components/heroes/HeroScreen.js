import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import getHeroById from '../../helpers/getHeroById'

const heroImages = require.context('../../assets/heroes')

const HeroScreen = ({ history }) => {
  const handleReturn = () => {
    if (history.length <= 2) history.push('/')
    else history.goBack()
  }

  const { heroId } = useParams()
  const hero = useMemo(() => getHeroById(heroId), [heroId])

  if (!hero) return <Redirect to="/" />

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImages(`./${id}.jpg`).default}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-4">
        <h2 className="mt-3">{superhero}</h2>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>

        <h4 className="mt-3">Characters</h4>
        <p>{characters}</p>

        <button className="btn btn-outline-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}

export default HeroScreen
