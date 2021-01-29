import React/*, { Component }*/ from 'react';
import './landing-page.css';
import Rules from '../Rules/rules';
import { Link } from 'react-router-dom';


export default class LandingPage extends React.Component {
 // constructor(props) {
   // super(props);
    //this.handleButtonClick = this.handleButtonClick.bind(this)
    state = {
      rulesExplained: false
    };
  //}

  /*handleButtonClick = () => {
    this.setState({
      rulesExplaied: true
    })
    console.log('lets explain rulez')
  }*/
  
  render() {
  const { rulesExplained } = this.state;
  let comp;
  if (rulesExplained === true) {
    comp = <Rules />;
  }
  return (
    <div className="landingPage">
        <div className="textbox">
          { rulesExplained && <Rules /> }
          <p>Thank you for downloading our app so we can celebrate the season with you! It's time to throw out the Santa hat with the doodled name scraps inside, gather around the phone and let's bring Secret Santa into the future together.</p><br /><br />
          <Link to='/rules'>Let's Get Started</Link>
        </div>

    </div>
  )
}
}