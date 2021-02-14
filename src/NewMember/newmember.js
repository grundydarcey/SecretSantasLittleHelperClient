import React from 'react';
import './newmember.css';
import config from '../config';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class NewMember extends React.Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
    onAddMember: () => { },
  }

  static contextType = ApiContext;

  handleSubmit(e) {
    e.preventDefault();
    const mName = e.target.name.value;
    const dollars = e.target.dollar.value;
    fetch(`${config.API_ENDPOINT}/members`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "member_name": mName,
        "dollars": dollars,
      }),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong, try submission again.');
    }
    return res.json();
  })
  .then((data) => {
      this.context.addMember(data);
    })
    .catch(error => {
      console.error({ error })
    })
    this.props.history.push('/members');
  }


  addNewMember = member => {
    fetch(`${config.API_ENDPOINT}/newmember`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(member)
    })
    .then(res => {
      return res.json()
    })
    .then(resJSON => this.context.handleAddMember(resJSON))
  }

  render() {
    return (
      <div className="create">
        <h1>Create New Member</h1>
        <div className="createbody">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset>
              <p>Add information about your new Secret Santa member!</p>
              <label htmlFor="name" className="name">Name: </label>
              <input type="text" name="name" id="name"></input><br />
              <label htmlFor="dollar" className="dollar">Dollar Amount of Gift: </label>
              <input type="text" name="dollar" id="dollar"></input><br /><br />
              <button type="submit" className="submitmember">Submit New Member</button>
              <button type="button" className="cancelsubmit">Cancel</button><br /><br /><br /><br />
              <Link to='/members'>View Members Screen</Link> 
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}