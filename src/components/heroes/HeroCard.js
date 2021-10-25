import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card h-100 shadow" style={{ maxWidth: '400px' }}>
      <div className="row g-0 h-100">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            style={{objectFit: 'cover', objectPosition: 'center center'}}
            className="card-img-top h-100"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-header text-muted fw-bold">{publisher}</div>
          <div className="card-body">
            <h4 className="card-title">{superhero}</h4>
            <h6 className="card-subtitle">{alter_ego}</h6>
            <div className="w-100">
              {alter_ego !== characters && (
                <div className="text-truncate">
                  <small className="card-text text-muted">{characters}</small>
                </div>
              )}
            </div>
            <p className="card-text mt-2">{first_appearance} </p>
            <div className="text-end">
              <Link
                className="btn btn-sm btn-outline-primary me-auto"
                to={`./hero/${id}`}
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
}

export default HeroCard
