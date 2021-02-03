import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';

export default class YourDraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMember: []
    }
    //this.handleClick = this.handleClick.bind(this)
  }

  static contextType = ApiContext;
  
  render() {
    const memberSelect = this.context.selectedMember
    console.log(memberSelect, 'newest member')
    const Groupmembers = this.context.members;
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })
    console.log(minusDrawerGroup, 'new array without drawer name')

    const randomMember =  minusDrawerGroup[Math.floor(Math.random()*minusDrawerGroup.length)]

    console.log(randomMember)
    const drawer = memberSelect.member_name;
    console.log(drawer, 'drawer')
    return (
      <div className='drawing'>
        <h1>{drawer}'s Draw</h1>
        <div className="drawbody">
          <p>Here's the moment you've been waiting for... check the nice list again...</p>
          <h2>You've drawn...</h2>
          {randomMember.member_name}<br /><br />
          <button 
            type="button" 
            className="reveal"
            //onClick={this.handleClick}
          >Reveal Your Draw</button>
          <p>Now before you pass the device to the next person in line, hit the 'Ready to Pass' button so they don't see who you're buying a gift for!</p><br />
          <button type="button" className="pass">Ready to pass?</button>
        </div>
      </div>
    )
  }
}