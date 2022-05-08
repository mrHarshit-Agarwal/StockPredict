
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux"
// import {Dummy} from "./components/dummy.component"
// import { createBrowserHistozry } from "history";
import  rootReducer  from './store/Reducers/index'
import { applyMiddleware, createStore } from "redux";
import AdminLayout from "layouts/Admin.js";
import thunk from "redux-thunk";
// import {  Router, Route } from "react-router-dom";
import routes from "./routes";
require('dotenv').config();
const store = createStore(rootReducer, applyMiddleware(thunk))
const getRoutes = (routes) => {
    return routes.map((prop, key) => {
       
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            element={<prop.component {...prop} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
 

ReactDOM.render(
    <Provider  store={store}>
    {/* <Router history={createHistory()}> */}
    <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
    <Router>
    <Routes>
            
            <Route exact path='/admin' element={<AdminLayout />}>
             
                {getRoutes(routes)} 
            </Route>
            <Route path='*' element={<App />} />
    </Routes>        
    </Router>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();