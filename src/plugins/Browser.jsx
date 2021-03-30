import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Plugins } from '@capacitor/core';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';

const { Browser } = Plugins;

export const browserPluginData = {
  title: "Browser",
  description: "Permite abrir vinculos en un navegador In-App",
  docs: "https://capacitorjs.com/docs/apis/browser"
}

export const ExternalLink = (props) => {
  const { to, children } = props;
  const handleClick = (e) => {
    e.preventDefault();
    Browser.open({ url: to })
  }
  return (
    <a href={to} onClick={handleClick}>{children}</a>
  )
}

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const BrowserImplementation = () => {

  // Valores y estados
  const { title, description, docs } = browserPluginData;
  const [logs, setLogs] = useState(['Plugin inicializado ' + new Date().toTimeString()]);

  // Efectos
  useEffect(() => {
    Browser.addListener('browserFinished', () => {
      setLogs(logs.concat(['browserFinished ' + new Date().toTimeString()]))
    });
    Browser.addListener('browserPageLoaded', () => {
      setLogs(logs.concat(['browserPageLoaded ' + new Date().toTimeString()]))
    });
    return () => {
      Browser.removeAllListeners();
    }
  }, []);

  return (
    <div>
      <DefaultNavbar />
      <Container className="pt-3 pb-3">
        <header>
          <h1>{title}</h1>
          <p>
            {description}{". "}
            <a href={docs}>Ver Documentación</a>
          </p>
        </header>
        <main>
          <h2>Vinculos de prueba</h2>
          <ul>
            <li>
              <ExternalLink to="https://reactjs.org/">
                Documentación React
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://capacitorjs.com/">
                Documentación Capacitor
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://github.com/angelxehg/react-capacitor-examples">
                Repositorio Proyecto
              </ExternalLink>
            </li>
          </ul>
          <h2>Logs</h2>
          <ul>
            {logs.map((text, i) => <li key={i}>{text}</li>)}
          </ul>
        </main>
      </Container>
    </div>
  )
}

export default BrowserImplementation
