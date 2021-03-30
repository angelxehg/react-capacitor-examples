import React from 'react';
import { Link } from 'react-router-dom';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';
import { Column, Row } from '../layouts/Grid';

const HomePage = () => {
  return (
    <div>
      <DefaultNavbar />
      <Container className="pt-3 pb-3">
        <header>
          <h1>
            React + Capacitor Examples
            <span className="badge bg-secondary ms-2">v0.2.0</span>
          </h1>
          <p>Ejemplos de uso de Capacitor en un proyecto con React</p>
        </header>
        <main>
          <h2>Enlaces</h2>
          <ul>
            <li>
              <a href="https://angelxehg.github.io/react-capacitor-examples">Repositorio</a>
            </li>
            <li>
              <a href="https://angelxehg.com/projects">Más proyectos</a>
            </li>
            <li>
              <a href="https://react-capacitor-examples.netlify.app">Versión PWA</a>
            </li>
            <li>
              <a href="https://github.com/angelxehg/react-capacitor-examples/releases">Versión Android</a>
            </li>
          </ul>
          <h2>Contenidos</h2>
          <Row>
            <Column xl="3" lg="4" md="6" className="p-1" >
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Layouts</h3>
                  <p className="card-text">Pruebas con layouts disponibles en Bootstrap</p>
                  <Link to="/layouts">Ver ejemplos</Link>
                </div>
              </div>
            </Column>
            <Column xl="3" lg="4" md="6" className="p-1" >
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Plugins</h3>
                  <p className="card-text">Pruebas con plugins disponibles en Capacitor</p>
                  <Link to="/plugins">Ver ejemplos</Link>
                </div>
              </div>
            </Column>
          </Row>
        </main>
      </Container>
    </div>
  )
}

export default HomePage;
