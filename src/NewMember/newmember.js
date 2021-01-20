import React from 'react';
import './newmember.css';

export default function NewMember() {
  return (
    <div className="create">
      <h1>Create New Member</h1>
      <div className="createbody">
        <form>
          <fieldset>
            <p>Add information about your new Secret Santa member!</p>
            <label htmlFor="name" className="name">Name: </label>
            <input type="text" name="name" id="name"></input><br />
            <label htmlFor="dollar" className="dollar">Dollar Amount of Gift: </label>
            <input type="text" name="dollar" id="dollar"></input><br /><br />
            <button type="submit" className="submitmember">Submit New Member</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}