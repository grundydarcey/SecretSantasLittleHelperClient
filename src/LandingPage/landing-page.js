import React from 'react';
import './landing-page.css';
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
  
  render() {
    return (
      <div className="landingPage">
        <div className="textbox">
          <div className="text">
          <p>Thank you for downloading our app so we can celebrate the holiday season with you! It's time to throw out the Santa hat with the doodled name scraps inside, gather around the phone and let's bring Secret Santa into the future together.</p><br /><br />
          </div>
          <Link to='/rules'>Let's Get Started</Link><br /><br />
        </div>
    </div>
    )
  }
}