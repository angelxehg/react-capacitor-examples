import React, { useEffect } from 'react';
import { Capacitor, Plugins, StatusBarStyle } from '@capacitor/core';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';

const { StatusBar } = Plugins;

export const statusBarPluginData = {
  title: "Status Bar",
  description: "Permite controlar Status Bar",
  docs: "https://capacitorjs.com/docs/apis/status-bar",
  enabled: ['ios', 'android'].includes(Capacitor.platform)
}

const StatusBarImplementation = () => {

  // Valores y estados
  const { title, description, docs } = statusBarPluginData;

  // Funciones
  const changeStatusBar = (makeDark = false) => {
    StatusBar.setStyle({
      style: makeDark ? StatusBarStyle.Dark : StatusBarStyle.Light
    });
    StatusBar.setBackgroundColor({
      color: makeDark ? '#000000' : '#FFFFFF'
    })
  }

  const hideStatusBar = () => {
    StatusBar.hide();
  }

  const showStatusBar = () => {
    StatusBar.show();
  }

  // Efectos
  useEffect(() => {
    return () => {
      StatusBar.setStyle({
        style: StatusBarStyle.Dark
      });
      StatusBar.setBackgroundColor({
        color: '#171B1F'
      });
      StatusBar.show();
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
          <h2>Acciones</h2>
          <button type="button" className="btn btn-primary" onClick={() => changeStatusBar(false)}>
            Tema Claro
          </button>
          <br />
          <button type="button" className="btn btn-primary" onClick={() => changeStatusBar(true)}>
            Tema Obscuro
          </button>
          <br />
          <button type="button" className="btn btn-primary" onClick={hideStatusBar}>
            Ocultar StatusBar
          </button>
          <br />
          <button type="button" className="btn btn-primary" onClick={showStatusBar}>
            Mostrar StatusBar
          </button>
        </main>
      </Container>
    </div>
  )
}

export default StatusBarImplementation
