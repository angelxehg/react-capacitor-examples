import React from 'react';

import DefaultNavbar from "../components/Navbar"

const PluginsPage = () => {
  return (
    <div>
      <DefaultNavbar/>
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
