import React from 'react';
import { ApiContext, ApiFetchContext } from '../ApiContext';
import './login.css';
//import { DataFetching, memberContext } from '../DataFetching';
//import { ApiFetchContext, ApiContext } from '../ApiContext';

export default class Login extends React.Component {
  //static contextType = memberContext;
  render() {
    return (
      <div className="loginscreen">
        <form>
          <h2>Login</h2>
          <fieldset>
            <p>Log back in to make any changes to your group for the holiday season or any gift giving occassion.</p>
            <label htmlFor="username" className="username">Username: </label>
            <input type="text" name="username" id="username"></input><br />
            <label htmlFor="password" className="password">Password: </label>
            <input type="text" name="password" id="password"></input><br /><br /><br />
            <button type="submit" className="signin">Sign in</button><br /><br />
            <p>Not signed up yet? Click below to start!</p>
            <button type="button" className="createnew">Create New Account</button>
          </fieldset>
        </form>
      </div>
    
    )
  }
}