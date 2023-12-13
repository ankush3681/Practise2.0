import React, { useState } from 'react';
import "./login.css";
import { FcUnlock,FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import {signInWithRedirect} from "firebase/auth";
import {auth,provider} from "../config";

const Login = () => {

    // const [value,setValue] = useState("");

    const handleClick = () =>{
      signInWithRedirect(auth, provider)
      .then((result) => {
          // Handle successful sign-in
          console.log(result.user);
      })
      .catch((error) => {
          // Handle errors
          if (error.code === 'auth/popup-closed-by-user') {
              // User closed the popup
              console.log('Popup closed by user');
          } else {
              console.error(error.message);
          }
      });
    }
  return (
    <>
    <div className='login-container'>
      <FcUnlock className='login-icon'/>
      <h1>Login</h1>     
      <form className='login-form'>
        <label>Email<span>*</span> 
        <input type="text" /></label>
        <label>Password<span>*</span> 
        <input type="password" /></label>
        <div > 
        <input type="checkbox"/> Remember me</div>
        <input type='submit' />
      </form>
      <div className='login-links'>
         <div>forgot password?</div>
          <div>Don't have account?<Link className="signup-url-in-login" to="/signup"> SignUp</Link></div>
      </div>

      <div className='google' onClick={handleClick}>
        <FcGoogle size={30} className='googleIcon'/>   <span>SignIn with Google</span>
      </div>
    </div>
    </>
  )
}

export default Login;