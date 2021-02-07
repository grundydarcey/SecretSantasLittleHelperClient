import './drawscreen.css';
import React from 'react';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class DrawScreen extends React.Component {
  constructor(props) {
    super(props);
    //binding my drop down handler to this
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
    //e.target.value came back as a json string, so parsing it is necessary to setting with my context handlers
    const parsifyTarget = JSON.parse(e.target.value);
    const leftToDraw = this.context.toDraw
    //makes drop down selection the only currently chosen drawer, and adds to array of already chosen drawers to only let each person draw a name once
    this.context.handleSelectedMember(parsifyTarget);
    this.context.handlePreviouslySelectedMember(parsifyTarget);
    this.context.handleAllDrawMembers(Groupmembers)
    //filters members left to draw and makes sure someone can't draw their own name
    const minusSelfGroup = leftToDraw.filter((member) => {
      return member.id !== parsifyTarget.id
    })
    //randomizes the members that remain
    const thisRandom = minusSelfGroup[Math.floor(Math.random()*minusSelfGroup.length)];
    this.context.handleAllDrawnMembers(thisRandom);
    this.context.handleCurrentDraw(thisRandom);
    //removes the randomized member from array of members left to draw
    const newDrawGroup = leftToDraw.filter((member) => {
      return member.id !== thisRandom.id
    })
    this.context.handleToDraw(newDrawGroup)
  }

  render() { 
    const remainingMembers = this.context.toDraw
    return (
      <div className="drawscreen"><br />
        <h1>Begin Drawing</h1>
        <div className="drawbody">
          <p>Here comes the fun part.</p>
          <p>Now we can start drawing names. Select your name below, hit 'See Your Secret Match!' and the next screen will show the name of the person you wil buy a gift for!</p>
          <p>On the next page, you will see the name of the person YOU will buy a gift for and a button to click.</p>
          <p>Once you've noted the name, press the button and pass the device to the next person. That button will prevent your secret from getting out!</p><br />
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