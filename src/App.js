import React, { Component } from 'react';
import LandingPage from './LandingPage/landing-page';
import { Route, Link } from 'react-router-dom';
import Login from './Login/login';
import CreateAccount from './CreateAccount/create-account';
import Header from './Header/header';
import Rules from './Rules/rules';
import DrawScreen from './DrawScreen/drawscreen';
import Group from './Group/group';
import NewMember from './NewMember/newmember';
import EditMember from './EditMember/editmember';
import YourDraw from './YourDraw/yourdraw';
import FinalDraw from './FinalDraw/finaldraw';
import config from './config';
import ApiContext from './ApiContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }
  //state = {
    //members: []
  //};

  

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
        this.setState({ members });
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
        <Route path='/login' component={Login} />
        <Route path='/createaccount' component={CreateAccount} />
        <Route path='/rules' component={Rules} />
        <Route path='/members' component={Group} />
        <Route path='/newmember' component={NewMember} />
        <Route path='/drawscreen' component={DrawScreen} />
        <Route path='/editmember' component={EditMember} />
        <Route path='/yourdraw' component={YourDraw} />
        <Route path='/finaldraw' component={FinalDraw} />
      </main>
    )
  }

  render() {
    const value = {
      members: this.state.members,
      deleteMember: this.handleDeleteMember
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <main className="App_header">{this.renderPageRoutes()}</main>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;