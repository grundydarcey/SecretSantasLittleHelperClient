import React, { Component } from 'react';
import LandingPage from './LandingPage/landing-page';
import { Route } from 'react-router-dom';
import Login from './Login/login';
import CreateAccount from './CreateAccount/create-account';
import Header from './Header/header';
import Rules from './Rules/rules';
import DrawScreen from './DrawScreen/drawscreen';
import Group from './Group/group';
import Individual from './Individual/Individual';
import NewMember from './NewMember/newmember';
import EditMember from './EditMember/editmember';
import YourDraw from './YourDraw/yourdraw';
import FinalDraw from './FinalDraw/finaldraw';
import config from './config';
import ApiContext from './ApiContext';
import singlemember from './SingleMember/singlemember';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      isLoading: true,
    }
  }
  
  componentDidMount() {
    

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
        this.setState({ members, isLoading: false });
      })
      .catch((error) => {
        console.error({ error });
      }) 
  }

 

  handleDeleteMember = memberId => {
    this.setState({
      members: this.state.members.filter(member => member.id !== memberId),
    })
  }

  renderPageRoutes() {
    return (
      <main className='App'>
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/createaccount' component={CreateAccount} />
        <Route exact path='/rules' component={Rules} />
        
        <Route exact path='/members' component={Group} members={this.state.members} isLoading={this.state.isLoading} />
        <Route exact path='/individual' component={Individual} />
        <Route exact path='/newmember' component={NewMember} />
        <Route exact path='/drawscreen' component={DrawScreen} />
        <Route exact path='/editmember' component={EditMember} />
        <Route exact path='/yourdraw' component={YourDraw} />
        <Route exact path='/finaldraw' component={FinalDraw} />
      </main>
    )
  }

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading...</div>
    }
    console.log(this.state, 'this.state')
    console.log(this.state.members, 'this.state.members')
    const value = {
      members: this.state.members,
      deleteMember: this.handleDeleteMember
    }
    console.log(this.context, 'this.context')
    return (   
      <ApiContext.Provider value={value}>
        <div className="App">
          <main className="App_header">{this.renderPageRoutes()}</main>
          <Route exact path='/members' render={(props) => ( <Group {...props} members={this.state.members} isLoading={this.state.isLoading} /> )} />
          <Route exact path='/individual' render={(props) => ( <Individual {...props} members={this.state.members} isLoading={this.state.isLoading} /> )} />
          <Route path='/members/:memberId' component={singlemember} />
          <p>name is {this.state.members[2].member_name}</p>
          
        </div>
        </ApiContext.Provider> 
    );
  }
}