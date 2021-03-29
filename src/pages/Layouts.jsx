import React from 'react';

import DefaultNavbar from "../components/Navbar"

const LayoutsPage = () => {
  return (
    <div>
      <DefaultNavbar/>
      <div className="container pt-2 pb-2">
        <header>
          <h1>Layouts</h1>
          <p>Pruebas con layouts disponibles en Bootstrap</p>
        </header>
      </div>
    </div>
  )
}

export default LayoutsPage;
