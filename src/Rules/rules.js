import React from 'react';
import './rules.css';
import { Link } from 'react-router-dom';

export default class Rules extends React.Component {
  render() {
    return (
      <div className="rules">
        <br />
        <h1>Let's Play!</h1>
        <div className="explanation">
          <p>On the next page you have the chance to tell us about your Secret Santa group!</p>    
          <p>You'll see a nuclear family that no one really has on the next page. But don't worry, you can edit or delete each of these members. If you're left with no one on the board, you can still add in new members. So throw in your neighbor, your best friend, Jake from State Farm, or anyone else who wants in.</p><br />
          <p>Don't forget to write in a dollar amount limit so everyone knows how much to spend on their person!</p><br />
          <Link to='/members'>Create Your Secret Santa Group</Link>
        </div>
      </div>
    )
  }
}