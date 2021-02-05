import React from 'react';
import './finaldraw.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class FinalDraw extends React.Component {
  static contextType = ApiContext;
  
  render() {
    const memberSelect = this.context.selectedMember;
    const drawer = memberSelect.member_name;
    const Groupmembers = this.context.members;
    const pastMembers = this.context.previouslySelectedMember;
    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)
    const minusSelfGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
      const checkId = pastMemberIds.includes(obj.id)
      if (checkId === false) {
        return obj.id
      }
    })
    const randomMember = minusSelfGroup[Math.floor(Math.random()*minusDrawerGroup.length)]
    
    const remainingDrawPool = this.context.remainingDrawPool;
    //console.log(remainingDrawPool)
    console.log(this.context.alreadyDrawn)
    console.log(this.context.toDraw)
    console.log(this.context.currentDraw)

    
    return (
      <div className="finaldraw">
        <h1>{drawer}'s Draw</h1>
        <div className="drawbody">
          <p>Here's the moment you've been waiting for... check the nice list again...</p>
          <h2>You've drawn...</h2>
          <h3>{this.context.currentDraw.member_name}</h3>
          <p>You did it! Everyone now knows who they need to buy their gifts for. Thank you so much for using our app and please tell a friend about it! If you'd like to start all over with the process, feel free to hit the Home button and start it up again, in case you think there's been any Secret Santa drawing fraud. Have a safe and happy holiday season!</p><br /><br />
          <Link to='/'>Home</Link>
        </div>
      </div>
    )
  }
}