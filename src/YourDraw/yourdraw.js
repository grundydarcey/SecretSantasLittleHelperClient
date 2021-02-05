import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class YourDraw extends React.Component {
  
  static contextType = ApiContext;

  componentDidMount() {
    const memberSelect = this.context.selectedMember
    const Groupmembers = this.context.members;
    const remainingMembers = this.context.remainingDrawerPool;
    const pastMembers = this.context.previouslySelectedMember;
    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)
    const minusSelfGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })
    const randomMember =  minusSelfGroup[Math.floor(Math.random()*minusSelfGroup.length)]
    const newDrawGroup = Groupmembers.filter(function(obj) {
      return obj.id !== randomMember.id
    })
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
      const checkId = pastMemberIds.includes(obj.id)
      if (checkId === false) {
        return obj.id
      }
    })
   
  
    this.context.handleDrawnMember(randomMember);
    this.context.remainingDrawPool = newDrawGroup;
    this.context.remainingDrawerPool = minusDrawerGroup;
  }

 
  
  render() {
    const memberSelect = this.context.selectedMember
    const Groupmembers = this.context.members;
    const pastMembers = this.context.previouslySelectedMember;
    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)
  const minusDrawerGroup = Groupmembers.filter(function(obj) {
    const checkId = pastMemberIds.includes(obj.id)
    if (checkId === false) {
      return obj.id
    }
    
  })
    const randomMember =  minusDrawerGroup[Math.floor(Math.random()*minusDrawerGroup.length)];
    
    const drawer = memberSelect.member_name;
    console.log(minusDrawerGroup)
    //console.log(this.context)
    console.log()

    const ifDrawingBegan = (this.context.previouslySelectedMember.length >= 1) ? (
      <div className="link">
        <Link to='/drawingscreen'>Ready to pass?</Link>
      </div>
    ) : (
      <div className="link">
        <Link to='/drawscreen'>Ready to pass?</Link>
      </div>
    )


    return (
      <div className='drawing'>
        <h1>{drawer}'s Draw</h1>
        <div className="drawbody">
          <p>Here's the moment you've been waiting for... check the nice list again...</p>
          <div className="drawname">
            <h2>You've drawn...</h2>
            {randomMember.member_name}
          </div>
          <p>Now before you pass the device to the next person in line, hit the 'Ready to Pass' button so they don't see who you're buying a gift for!</p><br />
          {ifDrawingBegan}
        </div>
      </div>
    )
  }
}