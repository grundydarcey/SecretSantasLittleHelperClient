import React from 'react';
import './rules.css';
import { Link } from 'react-router-dom';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rulesExplained: true
    }
  }


  render() {


  return (
      <div className="rules">
        <h1>Let's Play!</h1>
        <div className="explanation">
          <p>Now that we know a bit about you, we want to get to know who you're celebrating with!</p><br />
          <p>To get the full capabilities of our app, we need to know who is in your Secret Santa group. On the next screen, you will see a hypothetical Secret Sanat group made up of a fake 'nuclear family'. Don't worry, if your group looks a little different, we still have you covered. You will see an option to edit each of these group members if the names aren't quite right. Or if they're not right at all, feel free to just delete them all too! If you're left with no one on the board, you'll still see an option to add in new members. So throw in your neighbor, your best friend, Jake from State Farm or anyone else who wants in.</p><br />
          <p>Don't forget these member blocks also have a spot to indicate how much the Secret Santa present will cost! This is a widely debated part of Secret Santa, so we're leaving it up to you as well.</p><br />
          <Link to='/members'>Create Your Secret Santa Group</Link>
        </div>
      </div>
  )
}
}