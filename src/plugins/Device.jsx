import React, { useState, useEffect } from 'react';
import { Plugins } from '@capacitor/core';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';

const { Device } = Plugins;

export const devicePluginData = {
  title: "Device",
  description: "Permite leer información del dispositivo",
  docs: "https://capacitorjs.com/docs/apis/device",
  enabled: true
}

const DeviceImplementation = () => {

  // Valores y estados
  const { title, description, docs } = devicePluginData;
  const [deviceInfo, setDeviceInfo] = useState();

  // Efectos
  useEffect(() => {
    Device.getInfo().then(i => setDeviceInfo(i))
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
          <h2>Información</h2>
          {deviceInfo ? <ul>
            {Object.keys(deviceInfo).map(k => {
              const value = deviceInfo[k];
              return (
                <li key={k}>{k}: {value}</li>
              )
            })}
          </ul> : 'Cargando...'}
        </main>
      </Container>
    </div>
  )
}

export default DeviceImplementation
