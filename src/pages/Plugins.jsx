import React from 'react';
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import DefaultNavbar from "../components/Navbar";
import { Container } from '../layouts/Container';
import { Column, Row } from '../layouts/Grid';

import BrowserImplementation, { browserPluginData } from '../plugins/Browser';
import ClipboardImplementation, { clipboardPluginData } from '../plugins/Clipboard';
import DeviceImplementation, { devicePluginData } from '../plugins/Device';
import StatusBarImplementation, { statusBarPluginData } from '../plugins/StatusBar';

const allPlugins = [
  browserPluginData,
  clipboardPluginData,
  devicePluginData,
  statusBarPluginData,
];

const PluginsPage = () => {

  // Valores y estados
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/${browserPluginData.title}`}>
        <BrowserImplementation />
      </Route>
      <Route path={`${path}/${clipboardPluginData.title}`}>
        <ClipboardImplementation/>
      </Route>
      <Route path={`${path}/${devicePluginData.title}`}>
        <DeviceImplementation/>
      </Route>
      <Route path={`${path}/${statusBarPluginData.title}`}>
        <StatusBarImplementation/>
      </Route>
      <Route exact path={path}>
        <DefaultNavbar />
        <Container className="pt-3 pb-3">
          <header>
            <h1>Plugins</h1>
            <p>Pruebas con plugins disponibles en Capacitor</p>
          </header>
          <main>
            <h2 className="mt-3">Official</h2>
            <Row>
              {allPlugins.map(i => <Column key={i.title} xl="3" lg="4" md="6" className="p-1" >
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{i.title}</h3>
                    <p className="card-text">{i.description}</p>
                    <Link to={`${path}/${i.title}`}>Ver ejemplos</Link>
                  </div>
                </div>
              </Column>)}
            </Row>
          </main>
        </Container>
      </Route>
    </Switch>
  )
}

export default PluginsPage;
