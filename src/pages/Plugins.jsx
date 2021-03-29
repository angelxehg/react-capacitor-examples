import React from 'react';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';

const PluginsPage = () => {
  return (
    <div>
      <DefaultNavbar/>
      <Container className="pt-3 pb-3">
        <header>
          <h1>Plugins</h1>
          <p>Pruebas con plugins disponibles en Capacitor</p>
        </header>
      </Container>
    </div>
  )
}

export default PluginsPage;
