import React/*, { Component }*/ from 'react';
import './landing-page.css';

export default function LandingPage() {
  return (
    <div className="landingPage">
        <h1>Secret Santa's Little Helper</h1>
        <div class="textbox">
          <p>Thank you for downloading our app so we can celebrate the season with you! It's time to throw out the Santa hat with the doodled name scraps inside, gather around the phone and let's bring Secret Santa into the future together.</p><br /><br />
          <button class="toaccount">Log-in/Create Account</button>
        </div>
    </div>
  )
}

