import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import './App.css'; 
import "./index.css";
import {  Route, Link } from "react-router-dom";
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
                <Link className="nav-link" to={"/signin"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Routes>
            <Route exact path='/' element={<Login/>} /> 
            <Route path="/signin" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path='/feedback' element={
            <Feedback  />
            }/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
