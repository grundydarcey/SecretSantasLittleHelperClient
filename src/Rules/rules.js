import React from 'react';
import './rules.css';
import { Link } from 'react-router-dom';

export default class Rules extends React.Component {
  render() {
    return (
      <div className="rules">
        <h1>Let's Play!</h1>
        <div className="explanation">
          <p>Time to learn about your Secret Santa group. On the next screen, you will see a hypothetical Secret Santa group of a fake 'nuclear family'. Don't worry, if your group looks a little different, we still have you covered. You can edit each of these members if they aren't quite right. Or if they're not right at all, you can just delete them all too! If you're left with no one on the board, you'll can still add in new members. So throw in your neighbor, your best friend, Jake from State Farm, or anyone else who wants in.</p><br />
          <p>Don't forget these member blocks also have a spot to indicate how much the Secret Santa present will cost! This is a widely debated part of Secret Santa, so we're leaving it up to you as well.</p><br />
          <Link to='/members'>Create Your Secret Santa Group</Link>
        </div>
      </div>
    )
  }
}