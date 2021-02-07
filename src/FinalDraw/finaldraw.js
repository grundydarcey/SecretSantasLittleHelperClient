/* eslint-disable array-callback-return */
import React from 'react';
import './finaldraw.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class FinalDraw extends React.Component {
  constructor(props) {
    super(props)
    //binds handle restart to clear the members drawn and members left to draw so user can play again
    this.handleRestart = this.handleRestart.bind(this)
  }

  static contextType = ApiContext;

  handleRestart() {
    const Groupmembers = this.context.members
    this.context.handleToDraw(Groupmembers)
    this.context.handleAllDrawnMembers([])
  }

  
  render() {
    //allows the page to display who is currently drawing a name
    const memberSelect = this.context.selectedMember;
    const drawer = memberSelect.member_name;
    return (
      <div className="finaldraw"><br />
        <h1>{drawer}'s Draw</h1>
        <div className="drawbody">
          <p>Here's the moment you've been waiting for... check the nice list again...</p>
          <h2>You've drawn...</h2>
          <h3>{this.context.currentDraw.member_name}</h3>
          <p>You did it! Everyone now knows who they need to buy their gifts for. </p>
          <p>Thank you so much for using our app and please tell a friend about it! If you'd like to start all over with the process, feel free to hit the Home button and start it up again, in case you think there's been any Secret Santa drawing fraud. Have a safe and happy holiday season!</p><br /><br />
          <Link to='/' onClick={this.handleRestart}>Home</Link>
        </div>
      </div>
    )
  }
}