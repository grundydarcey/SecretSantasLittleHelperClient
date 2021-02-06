import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class YourDraw extends React.Component {
  /*constructor(props) {
    super(props)
    this.Random = this.Random.bind(this)
    this.getRandom = this.getRandom.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }*/
  
  static contextType = ApiContext;

 /* componentDidMount() {
    const memberSelect = this.context.selectedMember
    const Groupmembers = this.context.members;
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
    const pastDraw = this.context.alreadyDrawn;
    const pastDrawIds = pastDraw.map(pastDraw =>
      pastDraw.id)
    const leftToDraw = Groupmembers.filter(function(obj) {
      const checkId = pastDrawIds.includes(obj.id)
      if (checkId === false) {
        return obj.id
      }
    })

  }
*/

  componentDidMount() {
    //console.log(this.context)
  }


  /*
  handleClick() {
    const memberSelect = this.context.selectedMember
    const Groupmembers = this.context.members;
    const minusSelfGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })
    //const randomMember =  minusSelfGroup[Math.floor(Math.random()*minusSelfGroup.length)];
    console.log(this.getRandom())
    this.context.handleAllDrawnMembers(this.getRandom())
    console.log(this.context)
  }

  
  Random() {
    const alreadyDrawnMembers = this.context.alreadyDrawn;
    const newRandomGroup = alreadyDrawnMembers.filter((member) => member.id !== alreadyDrawnMembers.id)
    const memberSelect = this.context.selectedMember
    const Groupmembers = this.context.members;
    const minusSelfGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })
    return newRandomGroup[Math.floor(Math.random()*minusSelfGroup.length)]
  }

  getRandom() {
    const randomMember = this.Random()
    console.log(this.Random())
    console.log(randomMember())
    //return randomMember.member_name
    this.context.handleAllDrawnMembers(randomMember)
    return randomMember
  }*/

  render() {
    const memberSelect = this.context.selectedMember
    //const Groupmembers = this.context.members;
    //const pastMembers = this.context.previouslySelectedMember;
    //const pastMemberIds = pastMembers.map(pastMember =>
      //pastMember.id)
    const drawer = memberSelect.member_name;
    const ifDrawingBegan = (this.context.previouslySelectedMember.length >= 1) ? (
      <div className="link">
        <Link to='/drawingscreen'/* onClick={this.handleClick}*/ >Ready to pass?</Link>
      </div>
    ) : (
      <div className="link">
        <Link to='/drawscreen' /*onClick={this.handleClick}*/ >Ready to pass?</Link>
      </div>
    )
    //console.log(this.context)
    //console.log(this.context.alreadyDrawn)
    console.log(this.context.alreadyDrawn, 'alreadyDrawn')
    console.log(this.context.toDraw, 'left to draw')
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