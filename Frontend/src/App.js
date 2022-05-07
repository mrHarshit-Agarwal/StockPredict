import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import './App.css'; 
import "./index.css";
import {  Route, Link,Navigate } from "react-router-dom";
import Login from "./components/login.component";
import {Routes} from "react-router-dom";

import SignUp from "./components/signup.component";
import Feedback from 'feedback/Feedback';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>StockPredict</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/access/login"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/access/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Routes>
            <Route exact path='/' element={<Login/>} /> 
            <Route path="/access/login" element={<Login/>} />
            <Route path="/access/signup" element={<SignUp/>} />
            <Route path='*' element={<Navigate to='/access/login' />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
