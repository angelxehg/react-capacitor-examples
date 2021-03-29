import React from 'react';
import { BrowserRouter as Router,  Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
