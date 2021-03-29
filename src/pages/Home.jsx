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
          <p>Ejemplos de uso de Capacitor en un proyecto con React</p>
        </header>
      </Container>
    </div>
  )
}

export default HomePage;
