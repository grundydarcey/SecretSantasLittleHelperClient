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
      const parsifyTarget = JSON.parse(e.target.value);
      this.context.handleSelectedMember(parsifyTarget);
      this.context.handlePreviouslySelectedMember(parsifyTarget);
  }

  /*componentDidMount() {

  }*/

  render() {
    const Groupmembers = this.context.members;
    const previousMembers = this.context.previouslySelectedMember;
    const remainingMembers = this.context.remainingDrawerPool;
    //console.log(Groupmembers, 'groupmembers')
    //console.log(previousMembers, 'previous')

    const pastMembers = this.context.previouslySelectedMember;
    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)  
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
    const checkId = pastMemberIds.includes(obj.id)
    if (checkId === false) {
      return obj.id
    }
  })

    //console.log(remainingMembers, 'thisremainingmembers')
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