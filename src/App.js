import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './Containers/HomeScreen/Home';
import About from './Containers/AboutScreen/About';
import User from './Containers/UserScreen/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
