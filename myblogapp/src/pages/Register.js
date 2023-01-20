import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='auth'>
    <h1>Register</h1>
    <form>
        <input type required='text' placeholder = 'Username'></input>
        <input type required='email' placeholder = 'Email'></input>
        <input type required='password' placeholder = 'Password'></input>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Do you have an account? <Link to = "/login">Login</Link></span>
    </form>
    </div>
  )
}

export default Login