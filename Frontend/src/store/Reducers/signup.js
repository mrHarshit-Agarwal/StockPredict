import axios from 'axios';
import { message } from "antd"
export const SIGNUP_REQUEST = "Signup.SIGNUP_REQUEST"
export const SIGNUP_SUCCESS = "Signup.SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "Signup.SIGNUP_FAILURE"

export const signupRequest = (values) => (dispatch,getState)=>{
  
  dispatch({type:SIGNUP_REQUEST});
  let data = JSON.stringify({
    name: values.name,
    email: values.email,
    password: values.password,
    
  });
 
  return axios.post(`http://localhost:3001/api/signup/`, data,{
    
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*"
    }})
  .then(json => {
    
    if(json.data.status === 200){
    
      const status = json.data.status;
      message.success("Sign up successful, Please login")
      
      dispatch({type:SIGNUP_SUCCESS,status});
    }
    else if(json.status === false){
      const status = json.data.status;
      // const messloginage = json.data.message;
      dispatch({type:SIGNUP_FAILURE,status,message})
      message.error("Invalid entries");
      
    }
  })
  .catch(err =>alert(err))
}

// if (typeof window === 'undefined') {
//   require('localstorage-polyfill');
// }


const initialState = {
  loading: false,
  status: false,
  token:"",
  role: "",
  isLoggedIn: false,
  passwordChange: false
}

function signup(state = initialState, action){
  switch(action.type){
    case SIGNUP_REQUEST:
      return Object.assign({},state,{
        loading:true
      })
    case SIGNUP_SUCCESS:
      return Object.assign({},state,{
        status: action.status,
        loading:false,
        message: "",
      })
    case SIGNUP_FAILURE:
      return Object.assign({},state,{
        status: action.status,
        message: action.message,
        loading: false,
      })
    default:
      return state
  }
}
export default signup