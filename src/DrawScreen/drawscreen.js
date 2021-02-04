import './drawscreen.css';
import React from 'react';
import ApiContext from '../ApiContext';
import { Route, Link } from 'react-router-dom';
import YourDraw from '../YourDraw/yourdraw';

export default class DrawScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMember: [],
      remainingDrawPool: [],
      remainingDrawerPool: [],
      previouslySelectedMember: [],
    }
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
    this.context.selectedMember = parsifyTarget
    console.log(this.context.previouslySelectedMember, 'before previous')
    console.log(this.context.selectedMember, 'CURRENT CONTEXT')
    this.setState({
      previouslySelectedMember: [...this.state.previouslySelectedMember, parsifyTarget]
    })
  }

  componentDidMount() {
    
  }

  render() {  
    
    const Groupmembers = this.context.members;
    const previousMembers = this.context.previouslySelectedMembers;
    const remainingMembers = this.context.remainingDrawerPool;
    console.log(Groupmembers, 'thiscontextmembers')
    console.log(remainingMembers, 'thiscontextdrawerpool')
    console.log(previousMembers, 'previousmembers')
    console.log(this.context.previouslySelectedMember, 'aftercontext')
    console.log(this.state.previouslySelectedMember, 'afterstate')
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
          <Route exact path='/yourdraw' component={YourDraw} />
          <Link to='/yourdraw'>See your secret match!</Link>
        </div>
      </div>
    )
  }
}