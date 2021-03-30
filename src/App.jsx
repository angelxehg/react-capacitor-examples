import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Plugins, StatusBarStyle } from '@capacitor/core';

import './App.css';

import HomePage from './pages/Home';
import LayoutsPage from './pages/Layouts';
import PluginsPage from './pages/Plugins';

const { StatusBar } = Plugins;

function App() {
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
    <Router>
      <Helmet title="React + Capacitor Examples">
        <body className="bg-light" />
      </Helmet>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/layouts">
          <LayoutsPage />
        </Route>
        <Route path="/plugins">
          <PluginsPage />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
