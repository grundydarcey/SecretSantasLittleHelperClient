import React, { Component } from 'react';
import LandingPage from '../LandingPage/landing-page';
import { Route } from 'react-router-dom';
import Header from '../Header/header';
import Rules from '../Rules/rules';
import DrawScreen from '../DrawScreen/drawscreen';
import Group from '../Group/group';
import NewMember from '../NewMember/newmember';
import YourDraw from '../YourDraw/yourdraw';
import FinalDraw from '../FinalDraw/finaldraw';
import config from '../config';
import ApiContext  from '../ApiContext';
import Member from '../Member/Member';
import FurtherDrawScreen from '../FurtherDrawScreen/FurtherDrawScreen';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      addMember: () => { },
      editMember: () => { },
      selectedMember: [],
      previouslySelectedMember: [],
      alreadyDrawn: [],
      toDraw: [],
      currentDraw: [],
    }
  }

  static contextType = ApiContext;
    
  //asynchronously populates all of the members stored in the database
  componentDidMount = () => {
    Promise.all([
       fetch(`${config.API_ENDPOINT}/members`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    ])        
      .then(([membersRes]) => {
        if (!membersRes.ok) return membersRes.json().then((e) => Promise.reject(e));
        return Promise.all([membersRes.json()]);
      })
     .then(([members]) => {
     //sets all existing members for use throughout the app. Also populates an array full of members whose names have yet to be drawn
        this.setState({ members, toDraw: members });
      })
      .catch((error) => {
        console.error({ error });
      }) 
    }

  //adds each drawn name to an empty array so that no two names are drawn twice
  handleAllDrawnMembers = (drawnMember) => {
    this.setState({ alreadyDrawn: [...this.state.alreadyDrawn, drawnMember]})
  }

  //allows for the toDraw array to be reset with a new array that contains members who have yet to be drawn and removes the last drawn member name
  handleToDraw = (members) => {
    this.setState({ toDraw: members })
  }

  //sets and resets the name that is currently draw, used for displaying name on draw page
  handleCurrentDraw = (drawnMember) => {
    this.setState({ currentDraw: drawnMember })
  }

  handleAllDrawMembers = (members) => {
    this.setState({ remainingDrawPool: members})
  }

  //sets and resets an array with a single member that is currently drawing
  handleSelectedMember = (drawnMember) => {
    this.setState({ selectedMember: drawnMember })
  }

  //allows for an empty array to be added (one object at a time) to when someone draws a name 
  handlePreviouslySelectedMember = (chosenMember) => {
    this.setState({ previouslySelectedMember: [...this.state.previouslySelectedMember, chosenMember]})
  }

  //adds new member into the database
  addMember = (newMember) => {
    const addMember = [...this.state.members, newMember];
    this.setState({ members: addMember })
  }

  //handles deleting a member from the database
  handleDeleteMember = memberId => {
    this.setState({
      members: this.state.members.filter(member => member.id !== memberId),
    })
  }

  render() {
    const value = {
      members: this.state.members,
      addMember: this.state.addMember,
      deleteMember: this.handleDeleteMember,
      previouslySelectedMember: this.state.previouslySelectedMember,
      selectedMember: this.state.selectedMember, 
      alreadyDrawn: this.state.alreadyDrawn,
      toDraw: this.state.toDraw,
      currentDraw: this.state.currentDraw,
      //handlers that allow the user to dynamically draw random names
      handleCurrentDraw: this.handleCurrentDraw,
      handleToDraw: this.handleToDraw,
      handlePreviouslySelectedMember: this.handlePreviouslySelectedMember,
      handleSelectedMember: this.handleSelectedMember,
      handleAllDrawMembers: this.handleAllDrawMembers,
      handleAllDrawnMembers: this.handleAllDrawnMembers,
      handleDrawerMember: this.handleDrawerMember,
    }
    return ( 
      <ApiContext.Provider value={value}>  
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/rules' component={Rules} />
          <Route exact path='/members/' component={Group} />      
          <Route exact path='/newmember' component={NewMember} />
          <Route exact path='/drawscreen' component={DrawScreen} />
          <Route exact path='/drawingscreen' component={FurtherDrawScreen} />
          <Route exact path='/yourdraw' component={YourDraw} />
          <Route path='/members/:member_id' component={Member} />
          <Route exact path='/finaldraw' component={FinalDraw} />
        </div>
      </ApiContext.Provider>
    );
  }
}