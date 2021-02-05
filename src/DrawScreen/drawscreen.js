import './drawscreen.css';
import React from 'react';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class DrawScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDownSelection = this.handleDropDownSelection.bind(this)
  }

  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => { }
    }
  }

  static contextType = ApiContext;

  handleDropDownSelection(e) {
    const Groupmembers = this.context.members;
    const memberSelect = this.context.selectedMember
    const parsifyTarget = JSON.parse(e.target.value);
    this.context.handleSelectedMember(parsifyTarget);
    this.context.handlePreviouslySelectedMember(parsifyTarget);
    this.context.handleAllDrawMembers(Groupmembers)
    //console.log(Groupmembers)
    /*const minusSelfGroup = Groupmembers.filter(function(obj) {
      if (memberSelect.id !== obj.id) {
        return obj
      }
    })*/
    const minusSelfGroup = Groupmembers.filter((member) => member.id !== memberSelect.id)
    console.log(parsifyTarget)
    console.log(minusSelfGroup)
    

    const thisRandom = minusSelfGroup[Math.floor(Math.random()*minusSelfGroup.length)];
    //this.context.handleSelectedMember(parsifyTarget);
    this.context.handleAllDrawnMembers(thisRandom);
    this.context.handleCurrentDraw(thisRandom);
   
    //console.log(this.context.selectedMember.id)
    
    console.log(thisRandom)
  }

  render() { 
   //const Groupmembers = this.context.members;
    //const previousMembers = this.context.previouslySelectedMembers;
   // const remainingMembers = this.context.remainingDrawerPool;
  //  const remainingMembers = this.context.remainingDrawerPool;
    const remainingMembers = this.context.toDraw
   // console.log(remainingMembers)
    console.log(this.context.toDraw, 'left to draw')
  
    console.log(this.context.selectedMember, 'current chosen')
    console.log(this.context.previouslySelectedMember, 'all past chosen')
    //console.log(this.context)
    console.log(this.context.selectedMember.id, 'current chosen id')
    const remainingDrawPool = this.context.remainingDrawPool;
   // console.log(remainingDrawPool)
   console.log(this.context.alreadyDrawn, 'already drawn')
   console.log(this.context.currentDraw, 'current draw')

    return (
      <div className="drawscreen">
        <h1>Begin Drawing</h1>
        <div className="drawbody">
          <p>Here comes the fun part.</p>
          <p>Now we can start drawing names. Below there is a selector that will show names of everyone in your group. We recommend for this app, you gather everyone around your device. You will select your name from the app, hit 'Start Drawing!' and the next screen will show the name of the person you wil buy a gift for!</p>
          <p>On the next page, you will see the name of the person YOU will buy a gift for and a button to click. Once you've noted the name, press the button and pass the device to the next person. That button will prevent your secret from getting out!</p><br />
          <form>
            <label htmlFor="yourname" id="yourname">Select your name: </label>
            <select 
              name="groupmembers" 
              id="groupmembers"
              onChange={this.handleDropDownSelection}
            >
              <option className="pickName">Pick your name from below...</option>
              {remainingMembers.map(member => {
                return <option 
                  key={member.id}
                  value={JSON.stringify(member)} 
                  className="memberOption"
                >{member.member_name}</option>})}
            </select><br /><br />
          </form>
          <div className="standardDraw">
        <Link to='/yourdraw'>See your secret match!</Link>
      </div>
      </div>
      </div>
    )
  }
}