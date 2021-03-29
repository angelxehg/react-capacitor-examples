import React from 'react';

import { Navbar, NavbarBrand, NavbarCollapse, NavbarItem, NavbarToggler } from "../components/Navbar"

const HomePage = () => {
  return (
    <div>
      <Navbar>
        <NavbarBrand title="React + Capacitor" to="/" />
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarItem title="Inicio" to="/home" />
        </NavbarCollapse>
      </Navbar>
      <div className="container pt-2 pb-2">
        <header>
          <h1>React + Capacitor Examples</h1>
          <p>Hola mundo</p>
        </header>
      </div>
    </div>
  )
}

export default HomePage;
