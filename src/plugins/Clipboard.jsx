import React, { useState } from 'react';
import { Plugins } from '@capacitor/core';

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';

const { Clipboard } = Plugins;

export const clipboardPluginData = {
  title: "Clipboard",
  description: "Permite leer o modificar portapapeles",
  docs: "https://capacitorjs.com/docs/apis/clipboard"
}

const ClipboardImplementation = () => {

  // Valores y estados
  const { title, description, docs } = clipboardPluginData;
  const [logs, setLogs] = useState(['Plugin inicializado ' + new Date().toTimeString()]);

  // Funciones
  const readClipboard = async () => {
    const { type, value } = await Clipboard.read();
    setLogs(logs.concat([
      `Clipboard: ${type}: ${value} at ${new Date().toTimeString()}`
    ]))
  }
  const writeClipboard = async () => {
    await Clipboard.write({
      string: "Hola mundo!"
    });
    setLogs(logs.concat([
      `Clipboard: string: "Hola mundo!" at ${new Date().toTimeString()}`
    ]))
  }

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
          <button type="button" className="btn btn-primary" onClick={readClipboard}>
            Leer portapapeles
          </button>
          <button type="button" className="btn btn-primary" onClick={writeClipboard}>
            Escribir portapapeles
          </button>
          <h2>Logs</h2>
          <ul>
            {logs.map((text, i) => <li key={i}>{text}</li>)}
          </ul>
        </main>
      </Container>
    </div>
  )
}

export default ClipboardImplementation
