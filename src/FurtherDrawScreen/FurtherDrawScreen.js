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
      const Groupmembers = this.context.members;
      const alreadyDrawnMembers = this.context.alreadyDrawn;
      //const alreadyDrawnIds = alreadyDrawnMembers.map(alreadyDrawn => alreadyDrawn.id)
      const memberSelect = this.context.selectedMember;
      const parsifyTarget = JSON.parse(e.target.value);
      this.context.handleSelectedMember(parsifyTarget);
      this.context.handlePreviouslySelectedMember(parsifyTarget);
    
    console.log(alreadyDrawnMembers)
    //console.log(alreadyDrawnIds)

      /*const newRandomGroup = alreadyDrawnMembers.filter(function(obj) {
        const checkId = alreadyDrawnIds.includes(obj.id)
        if (checkId === false) {
          return obj.id
        }
      })*/
      
      const newRandomGroup = alreadyDrawnMembers.filter((member) => member.id !== alreadyDrawnMembers.id)

      console.log(newRandomGroup)
      const minusSelfGroup = Groupmembers.filter(function(obj) {
        return obj.id !== memberSelect.id
      })
      const thisRandom = newRandomGroup[Math.floor(Math.random()*newRandomGroup.length)];
      console.log(thisRandom)
      console.log(newRandomGroup)
      this.context.handleAllDrawnMembers(thisRandom)
      this.context.handleCurrentDraw(thisRandom);
  }

  render() {
    console.log(this.context.alreadyDrawn)
    const Groupmembers = this.context.members;
    const previousMembers = this.context.previouslySelectedMember;
    //const remainingMembers = this.context.remainingDrawerPool;
    const pastMembers = this.context.previouslySelectedMember;
    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)  
    console.log(this.context.selectedMember)
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
    const checkId = pastMemberIds.includes(obj.id)
    if (checkId === false) {
      return obj.id
    }
  })
    const isFinalDrawing = (Groupmembers.length - previousMembers.length < 1) ? (
      <div className="finalDraw">
        <Link to='/finaldraw'>Click here to see the final draw</Link>
      </div>
    ) : (
      <div className="standardDraw">
        <Link to='/yourdraw'>See your secret match!</Link>
      </div>
    )

    const remainingDrawPool = this.context.remainingDrawPool;
    //console.log(remainingDrawPool)
    console.log(this.context.alreadyDrawn)
    console.log(this.context.toDraw)
    console.log(this.context.currentDraw)
    
    return (
        <div className="drawscreen">
        <h1>Begin Drawing</h1>
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
              <option className="pickName">Pick your name from below...</option>
              {minusDrawerGroup.map(member => {
                return <option 
                  key={member.id}
                  value={JSON.stringify(member)} 
                  className="memberOption"
                >{member.member_name}</option>})}
            </select><br /><br />
          </form>
          {isFinalDrawing}
        </div>
      </div>

    )
  }
}