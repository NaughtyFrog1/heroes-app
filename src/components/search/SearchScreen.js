import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router'
import { useForm } from '../../hooks/useForm'
import HeroCard from '../heroes/HeroCard'
import getHeroesByName from '../../selectors/getHeroesByName'

const SearchScreen = ({ history }) => {
  const location = useLocation()
  const { query = '' } = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({ searchValue: query })
  const { searchValue } = formValues

  const heroesFiltered = useMemo(() => getHeroesByName(query), [query])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    history.push(`?query=${searchValue}`)
  }

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <form onSubmit={handleSearchSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Find your hero"
            name="searchValue"
            autoComplete="off"
            value={searchValue}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      <div>
        <h4>Results</h4>
        <hr />
        {heroesFiltered.length === 0 && (
          <div className="alert alert-danger text-center" role="alert">
            No heroes found
          </div>
        )}

        <div className="row row-cols-auto g-4 mb-5 justify-content-center animate__animated animate__fadeIn">
          {heroesFiltered.map((hero) => (
            <div className="col" key={hero.id}>
              <HeroCard key={hero.id} {...hero} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchScreen
