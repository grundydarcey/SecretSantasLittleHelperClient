import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';

export default class YourDraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMember: [],
      remainingDrawPool: [],
      remainingDrawerPool: [],
      //showButton: true,
    }
    //this.handleClick = this.handleClick.bind(this)
  }

  static contextType = ApiContext;

  /*handleClick = () => {
      this.setState({ showButton: false })
    }
*/
   
  
  render() {


  

    const memberSelect = this.context.selectedMember
    console.log(memberSelect, 'CURRENT CONTEXT')
    const Groupmembers = this.context.members;
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })
    console.log(minusDrawerGroup, 'NEWDRAWINGARRAY')
    const randomMember =  minusDrawerGroup[Math.floor(Math.random()*minusDrawerGroup.length)]
    //console.log(randomMember)
    const drawer = memberSelect.member_name;
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
          <button type="button" className="pass">Ready to pass?</button>
        </div>
      </div>
    )
  }
}