import React from 'react';
import './drawscreen.css';

export default function DrawScreen() {
  return (
      <div className="drawscreen">
        <h1>Begin Drawing</h1>
        <div className="drawbody">
          <p>Here comes the fun part.</p>
          <p>Now we can start drawing names. Below there is a selector that will show names of everyone in your group. We recommend for this app, you gather everyone around your device. You will select your name from the app, hit 'Start Drawing!' and the next screen will show the name of the person you wil buy a gift for!</p>
          <p>On the next page, you will see the name of the person YOU will buy a gift for and a button to click. Once you've noted the name, press the button and pass the device to the next person. That button will prevent your secret from getting out!</p><br />
          <form>
          <label htmlFor="yourname" id="yourname">Select your name: </label>
          <select name="groupmembers" id="groupmembers">
            <option value="Mom">Mom</option>
            <option value="dad">Dad</option>
            <option value="suzy">Suzy</option>
            <option value="billy">Billy</option>
            <option value="spot">Spot</option>
          </select><br /><br />
          <button type="submit" className="startdraw">Start Drawing!</button>
          </form>
        </div>

      </div>
  )
}