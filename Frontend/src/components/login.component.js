import { message } from "antd";
import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import  {loginRequest,changeStatus} from "../store/Reducers/login";
import { useNavigate } from "react-router"
const Login =  (props) => {
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    useEffect(() =>{ 
        console.log("props status 200");
        if(props.status === 200){
            props.changeStatus();
            navigate(`/admin/dashboard`);
      }
        
    },[props])
    const handleSubmit = (e) => {
        e.preventDefault();
        let values= {password,email};
        if(password === "" || email === ""){
            message.error("Fill the fields properly");
            return
        };
        
        props.loginRequest(values);
    }
    console.log("state"+props.token);
        return (
            <form>

                <h3>Log in</h3>

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

               

                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-dark btn-lg btn-block">Sign in</button>
               
            </form>
        );
    }

    const mapDispatchToProps = {
        loginRequest,
        changeStatus
      }
      const mapStateToProps = (state) => ({
        status:state.login.status,
        token:state.login.token
    });
    
      export default (connect(mapStateToProps,mapDispatchToProps)(Login));