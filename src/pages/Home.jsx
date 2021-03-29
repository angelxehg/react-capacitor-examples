import React from 'react';

import DefaultNavbar from "../components/Navbar"

const HomePage = () => {
  return (
    <div>
      <DefaultNavbar/>
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
