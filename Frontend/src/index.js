 
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Access from "layouts/Access";
import AdminLayout from "layouts/Admin.js";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
  wer
    <Routes>
      
      <Route path="/access" render={(props) => <Access {...props}/>}/>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Navigate from="/" to="/access" />
    </Routes>
     
  </BrowserRouter>
  ,
  document.getElementById("root")
);
