import React, { Component } from 'react';
import LandingPage from '../LandingPage/landing-page';
import { Route } from 'react-router-dom';
import Header from '../FinalDraw/Header/header';
import Rules from '../Rules/rules';
import DrawScreen from '../DrawScreen/drawscreen';
import Group from '../Group/group';
import Individual from '../Individual/Individual';
import NewMember from '../NewMember/newmember';
import YourDraw from '../YourDraw/yourdraw';
import FinalDraw from '../FinalDraw/finaldraw';
import config from '../config';
import ApiContext  from '../ApiContext';
import Member from '../Member/Member';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    members: [],
    addMember: () => { },
    editMember: () => { },
    selectedMember: {},
  }
}

  static contextType = ApiContext;
    
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
        this.setState({ members });
      })
      .catch((error) => {
        console.error({ error });
      }) 
    }

 selectedMember() {
    this.setState({ selectedMember: this.context.selectedMember })
  }

  addMember = (newMember) => {
    const addMember = [...this.state.members, newMember];
    this.setState({ members: addMember })
  }

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
    }
    return ( 
      <ApiContext.Provider value={value}>  
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/rules' component={Rules} />
          <Route exact path='/members/' component={Group} />
          <Route exact path='/individual' component={Individual} />
          <Route exact path='/newmember' component={NewMember} />
          <Route exact path='/drawscreen' component={DrawScreen} />
          <Route exact path='/yourdraw' component={YourDraw} />
          <Route path='/members/:member_id' component={Member} />
          <Route exact path='/finaldraw' component={FinalDraw} />
        </div>
      </ApiContext.Provider>
    );
  }
}