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
    e.preventDefault();
    const Groupmembers = this.context.members;
    const parsifyTarget = JSON.parse(e.target.value);
    const leftToDraw = this.context.toDraw
    this.context.handleSelectedMember(parsifyTarget);
    this.context.handlePreviouslySelectedMember(parsifyTarget);
    this.context.handleAllDrawMembers(Groupmembers)
    const minusSelfGroup = leftToDraw.filter((member) => {
      return member.id !== parsifyTarget.id
    })
    const thisRandom = minusSelfGroup[Math.floor(Math.random()*minusSelfGroup.length)];
    this.context.handleAllDrawnMembers(thisRandom);
    //console.log(thisRandom);
    //console.log(this.context.alreadyDrawn)
    this.context.handleCurrentDraw(thisRandom);
    const newDrawGroup = leftToDraw.filter((member) => {
      return member.id !== thisRandom.id
    })
    this.context.handleToDraw(newDrawGroup)
  }

  render() { 
    const remainingMembers = this.context.toDraw
    //console.log(this.context)
    //console.log(this.context.alreadyDrawn)
    console.log(this.context.alreadyDrawn, 'alreadyDrawn')
    console.log(this.context.toDraw, 'left to draw')
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