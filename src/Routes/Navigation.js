
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import App from '../App';
import Auth from '../Auth';
import SignInForm from '../SignInForm';
import SignupForm from '../Signup';

function Navigation() {
  return (
    <Router>
      <nav>
        <ul>
         
          <li>
            <Link to="/">Auth</Link>
          </li>
            <Link to="/SignInForm">SignInForm</Link>
          <li>
            <Link to="/SignupForm">SignupForm</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route  exact path="/" component={<Auth />} />

        <Route path="/SignInForm" component={<SignInForm />} />
        <Route path="/SignupForm" component={<SignupForm />} />
        <Route path="/App" component={<App />} />

      </Switch>
    </Router>
  );
}



export default Navigation;
