import React from 'react';
import './finaldraw.css';

export default function FinalDraw() {
  return (
    <div className="finaldraw">
      <h1>Your Draw</h1>
      <div className="drawbody">
        <p>Here's the moment you've been waiting for... check the nice list again...</p>
        <h2>You've drawn...</h2>
        <h3>-name-</h3>
        <p>You did it! Everyone now knows who they need to buy their gifts for. Thank you so much for using our app and please tell a friend about it! If you'd like to start all over with the process, feel free to hit the Home button and start it up again, in case you think there's been any Secret Santa drawing fraud. Have a safe and happy holiday season!</p><br /><br />
        <button type="button" className="home">Home</button>
      </div>

    </div>
  )
}