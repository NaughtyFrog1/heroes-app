import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({ to, children }) => {
  return (
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link" exact to={to}>
        {children}
      </NavLink>
    </li>
  )
}

NavbarItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavbarItem
