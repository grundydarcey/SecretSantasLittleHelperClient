import React from 'react';
import './create-account.css';

export default function CreateAccount() {
  return (
      <div className="createaccountscreen">
        <div className="header">
        <h1>Secret Santa's Little Helper</h1>
        </div>
        <form>
          <fieldset>
            <legend>Create New Account</legend>
          <p>Signing up for a new account will allow you to log back in and revisit your Secret Santa group!</p>
            <label htmlFor="email" className="email">Email address: </label>
            <input type="text" name="email" id="email"></input><br />
            <label htmlFor="username" className="username">Choose Username: </label>
            <input type="text" name="username" id="username"></input><br />
            <label htmlFor="password" className="password">Choose password: </label>
            <input type="text" name="password" id="password"></input><br />
            <label htmlFor="retypepassword" className="retypepassword">Retype password: </label>
            <input type="text" name="retypepassword" id="retypepassword"></input><br /><br />
            <button type="submit" className="createaccount">Create Account</button> 
          </fieldset>
        </form>
      </div>
  )
}