import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../../auth/AuthContext'
import types from '../../types/types'
import NavbarItem from './NavbarItem'

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext)
  const history = useHistory()

  const handleClickLogout = () => {
    dispatch({ type: types.logout })
    history.replace('login')
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HeroesApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavbarItem to="/marvel">Marvel</NavbarItem>
            <NavbarItem to="/dc">DC</NavbarItem>
            <NavbarItem to="/search">Search</NavbarItem>
          </ul>
          <ul className="navbar-nav ms-auto">
            <span className="nav-item nav-link text-muted fw-light">
              {user.name}
            </span>
            <button className="nav-item nav-link btn" onClick={handleClickLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
