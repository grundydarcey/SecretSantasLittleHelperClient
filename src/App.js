import React from 'react';
import LandingPage from './LandingPage/landing-page';
import { Route } from 'react-router-dom';
import Login from './Login/login';

function App() {
  return (
    <main className='App'>
      <Route path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
    </main>
  );
}

export default App;