import axios from 'axios';
import { message } from "antd"
export const LOGIN_REQUEST = "Login.LOGIN_REQUEST"
export const LOGIN_SUCCESS = "Login.LOGIN_SUCCESS"
export const LOGIN_FAILURE = "Login.LOGIN_FAILURE"
export const LOGOUT = "Login.LOGOUT"
export const STATUS_CHANGE = "Login.STATUS_CHANGE"
export const SET_CREDENTIALS = "Login.SET_CREDENTIALS"
export const PASSWORD_CHANGED = "Login.PASSWORD_CHANGED"

export const loggedIn = () => (dispatch,getState) => {
  const passwordChange = false
  dispatch({type:PASSWORD_CHANGED,passwordChange})
}

export const loginRequest = (values) => (dispatch,getState)=>{
  
  dispatch({type:LOGIN_REQUEST});
  let data =JSON.stringify({
    email: values.email,
    password: values.password,
  });
  return axios.post(`http://localhost:3001/api/login/`,data, {

    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":"*"
    },
   
  })

  .then(json => {
    
    if(json.data.status == 200){
      const status = json.data.status;
      const token = json.data.message;
      localStorage.setItem("token",token);
      message.success("Login successfully");
      dispatch({type:LOGIN_SUCCESS,status,token});
    }
    else if(json.status === false){
      const status = json.data.status;
      const message = json.data.message;
      dispatch({type:LOGIN_FAILURE,status,message})
      message.error("Invalid credentials.");
    }
  })
  .catch(err =>alert(err))
}

export const logout = () => (dispatch) => {
  localStorage.setItem("token","");
  dispatch({type:LOGOUT})
}

export const setCredentials = () => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type:SET_CREDENTIALS,token});
}

export const changeStatus = () => (dispatch) => {
  dispatch({type:STATUS_CHANGE})
}

// export const changePassword = (password) => (dispatch,getState) => {
//   const {token,restaurantID} = getState().login
//   return fetch(`${fetchUrl()}change-password/${restaurantID}`,{
//     method: "POST",
//     headers:{"Content-Type":"application/json",
//     "authorization": `${token}`
//   },
//   body:JSON.stringify({
//     userId:restaurantID,
//     password:password
//   })
//   }).then(response => response.json()).then(json => {
//     if(json.status){
//       message.success(json.message,7)
//       const passwordChange = true
//       dispatch({type: PASSWORD_CHANGED,passwordChange})

//     }
    
//   })

// }



// const tokenValue = ""
// const restaurantID = ""
// const role = ""
if (typeof window === 'undefined') {
  require('localstorage-polyfill');
}

  const tokenValue = localStorage.getItem('token');
//   const restaurantID = localStorage.getItem('restaurantID');
//   const role = localStorage.getItem('role');


const initialState = {
  loading: false,
  status: 0,
  token:"" || tokenValue,
  role: "",
  isLoggedIn: false,
  passwordChange: false
}

function login(state = initialState, action){
  switch(action.type){
    case LOGIN_REQUEST:
      return Object.assign({},state,{
        loading:true
      })
    case LOGIN_SUCCESS:
       
      return Object.assign({},state,{
        status: action.status,
        token: action.token,
        loading:false,
        message: "",
        // isLoggedIn: action.isLoggedIn,
        // passwordChange: false
        
      })
    case LOGIN_FAILURE:
      return Object.assign({},state,{
        status: action.status,
        message: action.message,
        loading: false,
        token:"",
        // isLoggedIn:false,
        // restaurantID:"",
        //role: "",
        //passwordChange: false
      })
    case LOGOUT:
      return Object.assign({},state,{
        status: false,
        token: "",
        //restaurantID:"",
        //role: "",
        isLoggedIn:false,
        //passwordChange:false
      })
    case SET_CREDENTIALS:
      return Object.assign({},state,{
        token: action.token,
        //restaurantID: action.restaurantID,
        //role: action.role
      })  
    case PASSWORD_CHANGED:
      return Object.assign({},state,{
        passwordChange:action.passwordChange
      })
    case STATUS_CHANGE:
      return Object.assign({},state,{
        status:0
      })   
    default:
      return state
  }
}
export default login