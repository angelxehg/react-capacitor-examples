import React from 'react';

import { Navbar, NavbarBrand, NavbarCollapse, NavbarItem, NavbarToggler } from "../components/Navbar"

const PluginsPage = () => {
  return (
    <div>
      <Navbar>
        <NavbarBrand title="React + Capacitor" to="/" />
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarItem title="Inicio" to="/home" />
          <NavbarItem title="Layouts" to="/layouts" />
          <NavbarItem title="Plugins" to="/plugins" />
        </NavbarCollapse>
      </Navbar>
      <div className="container pt-2 pb-2">
        <header>
          <h1>Plugins</h1>
          <p>Pruebas con plugins disponibles en Capacitor</p>
        </header>
      </div>
    </div>
  )
}

export default PluginsPage;
