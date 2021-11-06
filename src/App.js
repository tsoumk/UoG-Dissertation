import React, { useEffect, useState } from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import { Account } from './components/Account';
import { Calibration } from './components/Calibration';
import { Home } from './components/Home';
import { Login } from './components/Login';


function App() {
  const [GazeCloudAPI, setGazeCloudAPI] = useState()

  useEffect(() => {
    window.addEventListener('load', () => {

      console.log('GazeCloudAPI', window.document.GazeCloudAPI);
      setGazeCloudAPI(window.document.GazeCloudAPI)
    })
  }, [])
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/script-camera.js";
    script.defer = true
    document.body.appendChild(script);
  }, [])

  return (
    <div className="container">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/calibration">
          <Calibration GazeCloudAPI={GazeCloudAPI} />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
