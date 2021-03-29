import React from 'react';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';

const HomePage = () => {
  return (
    <div>
      <DefaultNavbar/>
      <Container className="pt-3 pb-3">
        <header>
          <h1>React + Capacitor Examples</h1>
          <p>Hola mundo</p>
        </header>
      </Container>
    </div>
  )
}

export default HomePage;
