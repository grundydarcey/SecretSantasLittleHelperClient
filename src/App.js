import React from 'react';
import LandingPage from './LandingPage/landing-page';
import { Route } from 'react-router-dom';
import Login from './Login/login';
import CreateAccount from './CreateAccount/create-account';
import Header from './Header/header';

function App() {
  return (
    <main className='App'>
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/createaccount' component={CreateAccount} />
    </main>
  );
}

export default App;