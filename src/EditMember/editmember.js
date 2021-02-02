import React from 'react';
import './editmember.css';
import config from '../config';

import axios from 'axios';

export default class EditMember extends React.Component {
  state = {
    member_name: '',
    dollars: ''
  }
  
  static defaultProps = {
    match: {
      params: {}
    }
  }

 

  getMemberFields() {
    let id = this.props.match.params.member_id;
    axios.get(`${config.API_ENDPOINT}/members/` + id)
    .then(response => {
      this.setState({ 
        member_name: this.response.data.member_name,
        dollars: this.response.data.dollars,
      }, () => {
        console.log(this.state)
      })
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getMemberFields();
    console.log(this.state, 'this.state')
  }
  
  render() {
    return (
    <div className='editmember'>
      <h1>Edit Member</h1>
      <p>{this.props.match.params.id}</p>
      <div className='editbody'>
        <form>
          <fieldset>
            <p>Alter information about a previously-created member here.</p>
            <label htmlFor="name" className="name">Name: </label>
            <input type="text" name="name" id="name"></input><br />
            <label htmlFor="dollar" className="dollar">Dollar amount of gift: </label>
            <input type="text" name="dollar" id="dollar"></input><br />
            <button type="submit" className="editsubmit">Save Changes</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
}