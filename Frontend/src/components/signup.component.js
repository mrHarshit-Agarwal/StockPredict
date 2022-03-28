import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { signupRequest } from "../store/Reducers/signup";
import { message } from "antd";
const SignUp = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let name = firstName+lastName;
        let values= {name,password,email};
        if(password == "" || email == "" || name == ""){
            message.error("Fill the fields properly");
            return
        };
        props.signupRequest(values);
    }
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" value = {firstName}
                     onChange = {(e) => setFirstName(e.target.value)} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" value = {lastName}
                     onChange = {(e) => setLastName(e.target.value)} className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value = {email}
                     onChange = {(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value = {password}
                     onChange = {(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={(e)=>handleSubmit(e)} type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                
            </form>
        );
    }

    const mapDispatchToProps = {
        signupRequest
      }
      
  
export default connect(null,mapDispatchToProps)(SignUp);