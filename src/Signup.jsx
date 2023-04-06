import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Auth.css'

function SignupForm(props) {

  const history = useHistory();
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    props.onFormSwitch('login')
    // history.push('/login');
  };

  return (
    <div className="auth-form-container">
    <form  className="register-form" onSubmit={handleSubmit}>
       <input  
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
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
      <button type="submit"  >Sign up</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    <button  className="link-btn" onClick={()=> props.onFormSwitch('login')}>Already have an Account? login here</button>
    </div>
  );
}

export default SignupForm;
