import React from 'react';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';

const LayoutsPage = () => {
  return (
    <div>
      <DefaultNavbar />
      <Container className="pt-3 pb-3">
        <header>
          <h1>Layouts</h1>
          <p>Pruebas con layouts disponibles en Bootstrap</p>
        </header>
        <main>
          <h2 className="mt-3">Cards</h2>
          <p>
            Trabajo en progreso...
          </p>
        </main>
      </Container>
    </div>
  )
}

export default LayoutsPage;
