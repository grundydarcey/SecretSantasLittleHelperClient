import React from 'react';
import './group.css';
import Store from '../store.js';

export default function Group() {
  return (
    <div className="groupmembers">
      <h1>Customize Your Group</h1>
      <div className="groupbody">
        <p>Feel free to use the edit, delete and create buttons to fine-tune your Secret Santa group below.</p><br />
        <ul className="members">
          <li className="individuals">
            <p>Name: </p>
            <p>Dollar amount: </p>
          </li>
          <li className="newmember">
            <h2>Create New Member</h2>
            <button type="button" className="newbutton">Add New Member Details</button>
          </li>
          </ul>
        <button className="begindrawing" type="button">Begin Drawing</button>
      </div>
    </div>
  )
}