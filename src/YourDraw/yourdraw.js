import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class YourDraw extends React.Component { 
  static contextType = ApiContext;

  render() {
    const memberSelect = this.context.selectedMember
    const drawer = memberSelect.member_name;
    //determines whether to send user to first drawing screen (displays all member names in the database) or second drawing screen (displaying remaining member names after first draw)
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
            {this.context.currentDraw.member_name}
          </div>
          <p>Now before you pass the device to the next person in line, hit the 'Ready to Pass' button so they don't see who you're buying a gift for!</p><br />
          {ifDrawingBegan}
        </div>
      </div>
    )
  }
}