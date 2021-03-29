import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

import useClasses from '../hooks/use-classes';

export const Navbar = (props) => {
  const { className, children } = props;
  const classes = useClasses("navbar", className);
  return (
    <nav className={classes}>
      <div className='container-md'>{children}</div>
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export const NavbarBrand = (props) => {
  const { className, title, to } = props;
  const classes = useClasses("navbar-brand", className);
  return (
    <Link className={classes} to={to}>
      {title}
    </Link>
  )
}

NavbarBrand.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export const NavbarToggler = (props) => {
  const { className } = props;
  const classes = useClasses('navbar-toggler', className);
  return (
    <button
      className={classes}
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
}

NavbarToggler.propTypes = {
  className: PropTypes.string
}

export const NavbarCollapse = (props) => {
  const { className, children } = props;
  const classes = useClasses('collapse navbar-collapse', className);
  return (
    <div className={classes} id='navbarSupportedContent'>
      {children}
    </div>
  )
}

NavbarCollapse.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export const NavbarNav = (props) => {
  const { className, children } = props;
  const classes = useClasses("navbar-nav", className);
  return (
    <ul className={classes}>{children}</ul>
  )
}

NavbarNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export const NavbarItem = (props) => {
  const { className, title, to } = props;
  const classes = useClasses('nav-item', className);
  return (
    <li className={classes}>
      <NavLink className='nav-link' to={to} activeClassName='active'>
        {title}
      </NavLink>
    </li>
  )
}

NavbarItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const DefaultNavbar = () => (
  <Navbar className="navbar-expand-sm sticky-top navbar-dark bg-dark">
    <NavbarBrand title="React + Capacitor" to="/" />
    <NavbarToggler />
    <NavbarCollapse>
      <NavbarNav className="me-auto">
        <NavbarItem title="Inicio" to="/home" />
        <NavbarItem title="Layouts" to="/layouts" />
        <NavbarItem title="Plugins" to="/plugins" />
      </NavbarNav>
      <NavbarNav>
        <li className='nav-item'>
          <a className='nav-link' href="https://github.com/angelxehg/react-capacitor-examples">GitHub</a>
        </li>
      </NavbarNav>
    </NavbarCollapse>
  </Navbar>
)

export default DefaultNavbar;
