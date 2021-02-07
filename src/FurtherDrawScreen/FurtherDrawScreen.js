/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React from 'react';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';
import './FurtherDrawScreen.css';

export default class FurtherDrawScreen extends React.Component {
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
      const leftToDraw = this.context.toDraw;
      const parsifyTarget = JSON.parse(e.target.value);
      //adds currently selected name to reset the selected member to reflect it, also adds it to the previously selected array
      this.context.handleSelectedMember(parsifyTarget);
      this.context.handlePreviouslySelectedMember(parsifyTarget);
      //prevents user from drawing their own name in secret santa
      const minusSelfGroup = leftToDraw.filter((member) => {
        return member.id !== parsifyTarget.id
      })
      //randomizes the names left after self is removed
      const thisRandom = minusSelfGroup[Math.floor(Math.random()*minusSelfGroup.length)];
      //adds randomized member to already drawn array, and switches the last randomized name to this current randomized name
      this.context.handleAllDrawnMembers(thisRandom)
      this.context.handleCurrentDraw(thisRandom);
  }

  componentDidMount() {
    const Groupmembers = this.context.members;
    const alreadyDrawnMembers = this.context.alreadyDrawn;
    //removes the randomized member from array of members left to draw
    const randomRemove = Groupmembers.filter((member) => (alreadyDrawnMembers.findIndex((members) => (members.id == member.id)) == -1));
    this.context.handleToDraw(randomRemove)
  }

  render() {
    const Groupmembers = this.context.members;
    const previousMembers = this.context.previouslySelectedMember;
    const pastMembers = this.context.previouslySelectedMember;
    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)  
    //creates a new array that only shows names of members who have not yet drawn for secret santa
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
    const checkId = pastMemberIds.includes(obj.id)
    if (checkId === false) {
      return obj.id
    }
  })
    //determines whether to send user back into a drawing loop (standardDraw) or to render the last page with last remaining drawee name and page (finalDraw)
    const isFinalDrawing = (Groupmembers.length - previousMembers.length < 1) ? (
      <div className="finalDraw">
        <Link to='/finaldraw'>Click here to see the final draw</Link>
      </div>
    ) : (
      <div className="standardDraw">
        <Link to='/yourdraw'>See your secret match!</Link>
      </div>
    )    
    return (
        <div className="drawscreen">
          <h1>Drawing</h1>
          <div className="drawbody">
            <p>Let's keep drawing!</p>
            <p>Once you've noted the name, press the button and pass the device to the next person. That button will prevent your secret from getting out!</p><br />
            <form>
              <label htmlFor="yourname" id="yourname">Select your name: </label>
                <select 
                  name="groupmembers" 
                  id="groupmembers"
                  onChange={this.handleDropDownSelection}
                >
                <option className="pickName">Pick your name...</option>
                {minusDrawerGroup.map(member => {
                  return <option 
                    key={member.id}
                    value={JSON.stringify(member)} 
                    className="memberOption"
                  >
                {member.member_name}</option>})}
                </select><br /><br />
              </form>
            {isFinalDrawing}
          </div>
        </div>
    )
  }
}