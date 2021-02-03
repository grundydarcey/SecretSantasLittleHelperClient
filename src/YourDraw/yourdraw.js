import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';

export default class YourDraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMember: []
    }
  }

  static contextType = ApiContext;

  render() {
    console.log(this.context.members)
    console.log(this.context.selectedMember, 'this selected member')
    return (
      <div className='drawing'>
        <h1>Your Draw</h1>
        <div className="drawbody">
          <p>Here's the moment you've been waiting for... check the nice list again...</p>
          <h2>You've drawn...</h2>
          <h3>-name-</h3>
          <p>Now before you pass the device to the next person in line, hit the 'Ready to Pass' button so they don't see who you're buying a gift for!</p><br />
          <button type="button" className="pass">Ready to pass?</button>
        </div>
      </div>
    )
  }
}