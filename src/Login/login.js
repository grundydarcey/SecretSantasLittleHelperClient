import React from 'react';
import './login.css';

export default function Login() {
  return (
      <div className="loginscreen">
        <h1>Secret Santa's Little Helper</h1>
        <form>
          <h2>Login</h2>
          <fieldset>
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