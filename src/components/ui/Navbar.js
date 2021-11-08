import React from 'react'
import { Link } from 'react-router-dom'
import NavbarItem from './NavbarItem'

export const Navbar = () => {
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
            <NavbarItem to="/login">Logout</NavbarItem>
          </ul>
        </div>
      </div>
    </nav>
  )
}
