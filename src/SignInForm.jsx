import React, { useState } from 'react';
import './Auth.css';
import {  Link} from 'react-router-dom';
import {  IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";

// import { useNavigation } from "@react-navigation/native";


function SignInForm(props) {
 
  const history = useHistory();
  

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    // Connect to your back-end service to authenticate the user
    // setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    history.push('/products');

  };

  return (
    <div className="auth-form-container">
    <form className='login-form' onSubmit={handleSubmit}>

   

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      {/* <Link  to="/products">Sign In</Link> */}

      <button type="submit" >Sign In</button>
    
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    <button onClick={()=> props.onFormSwitch('signup')} className="link-btn" >Don't Have Account? Register</button>
    </div>
  );
}

export default SignInForm;
