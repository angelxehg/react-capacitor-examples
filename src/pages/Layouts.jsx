import React from 'react';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';
import { Column, Row } from '../layouts/Grid';

const samples = [];
for (let i = 1; i <= 8; i++) {
  const item = {
    id: i,
    title: `Elemento #${i}`,
    description: `Este es un elemento de prueba, con el número ${i}`,
  };
  samples.push(item);
}

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
          <Row>
            {samples.map(i => <Column key={i.id} xl="3" lg="4" md="6" className="p-1" >
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{i.title}</h3>
                  <p className="card-text">{i.description}</p>
                </div>
              </div>
            </Column>)}
          </Row>
        </main>
      </Container>
    </div>
  )
}

export default LayoutsPage;
