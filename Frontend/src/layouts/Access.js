import React,{useEffect}from 'react';
import { Route, Link,Navigate } from "react-router-dom";
import '../assets/css/access.css';
import Login from 'views/Login';
import SignUp from 'views/Signup';
function Access(props){
   
return (
<div className="App">
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
     <div className="container">
       <Link className="navbar-brand" to={"/access/login"}>Stock Predict</Link>
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
         
<Route path="/access/login" render={() => <Login />} />
<Route path="/access/signup"render={() => <SignUp />} />
<Navigate from="/access" to="/access/login" />
</div>
</div>
</div>
);
}
export default Access;