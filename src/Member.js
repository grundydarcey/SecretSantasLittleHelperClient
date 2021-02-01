import React, { Component } from 'react';
import axios from 'axios';
import config from './config';

export default class Member extends Component {
  state = {
    member: null
  }

  componentDidMount() {
    let id = this.props.match.params.member_id;
    axios.get(`${config.API_ENDPOINT}/members/` + id)
      .then(res => {
        this.setState({
          member: res.data
        })
      })
  }  
  
  render() {
    const member = this.state.member ?  (
      <div className='center'>
        <h3>Member Name: {this.state.member.member_name}</h3><br />
        <p>Dollar Amount for Gift: {this.state.member.dollars}</p>
        <div className='editbody'>
        <form>
          <fieldset>
            <p>Alter information about a previously-created member here.</p>
            <label htmlFor="name" className="name">Name: </label>
            <input type="text" name="name" id="name" placeholder="name"></input><br />
            <label htmlFor="dollar" className="dollar">Dollar amount of gift: </label>
            <input type="text" name="dollar" id="dollar" placeholder="dollaz"></input><br />
            <button type="submit" className="editsubmit">Save Changes</button>
          </fieldset>
        </form>
      </div>
      </div>
    ) : (
      <div className='center'>
        Loading...
      </div>
    )
    return (
      <div className='member'>
        <h2>Edit Group Member</h2><br />
        {member}
      </div>
    )
  }
}