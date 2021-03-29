import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = props => (
  <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
    <div className='container-md'>{props.children}</div>
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export const NavbarBrand = props => (
  <Link className='navbar-brand' to={props.to}>
    {props.title}
  </Link>
)

NavbarBrand.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export const NavbarToggler = () => (
  <button
    className='navbar-toggler'
    type='button'
    data-bs-toggle='collapse'
    data-bs-target='#navbarSupportedContent'
    aria-controls='navbarSupportedContent'
    aria-expanded='false'
    aria-label='Toggle navigation'
  >
    <span className='navbar-toggler-icon'></span>
  </button>
)

export const NavbarCollapse = props => (
  <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    <ul className='navbar-nav'>{props.children}</ul>
  </div>
)

NavbarCollapse.propTypes = {
  children: PropTypes.node.isRequired,
}

export const NavbarItem = props => (
  <li className='nav-item'>
    <NavLink className='nav-link' to={props.to} activeClassName='active'>
      {props.title}
    </NavLink>
  </li>
)

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const DefaultNavbar = () => (
  <Navbar>
    <NavbarBrand title="React + Capacitor" to="/" />
    <NavbarToggler />
    <NavbarCollapse>
      <NavbarItem title="Inicio" to="/home" />
      <NavbarItem title="Layouts" to="/layouts" />
      <NavbarItem title="Plugins" to="/plugins" />
    </NavbarCollapse>
  </Navbar>
)

export default DefaultNavbar;
