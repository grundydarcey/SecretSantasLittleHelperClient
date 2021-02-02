import React, { Component } from 'react';
import axios from 'axios';
import config from './config';
import ApiContext from './ApiContext';
import { Switch } from 'react-router-dom';

export default class Member extends Component {
  state = {
    member: null,
    onDeleteMember: () => { }
  }

  static defaultProps = {
    match: {
      params: {}
    },
    history: {
      push: () => { }
    },
    onDeleteMember: () => { },
  }

  static contextType = ApiContext;

  componentDidMount() {
    let id = this.props.match.params.member_id;
    axios.get(`${config.API_ENDPOINT}/members/` + id)
      .then(res => {
        this.setState({
          member: res.data
        })
      })
  }  

  handleClickDelete = e => {
    e.preventDefault()
    const memberId = this.props.match.params.member_id;
    fetch(`${config.API_ENDPOINT}/members/${memberId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.context.deleteMember(memberId)
        this.state.onDeleteMember(memberId)
      })
      .catch(error => {
        console.error({ error })
      })
      this.props.history.push('/members')
  }
  
  render() { 
    const { member_name, id } = this.props;
    const member = this.state.member ?  (
      <div className='center'>
        <h2>You are now editing information for group member {this.state.member.member_name} with a ${this.state.member.dollars} limit.</h2><br />
        <div className='editbody'>
        <form>
          <fieldset>
            <p>Alter information about a previously-created member here.</p>
            <label htmlFor="name" className="name">Name: </label>
            <input type="text" name="name" id="name" placeholder='name'></input><br />
            <label htmlFor="dollar" className="dollar">Dollar amount of gift: </label>
            <input type="text" name="dollar" id="dollar" placeholder="dollaz"></input><br />
            <button type="submit" className="editsubmit">Save Changes</button>
            <button 
              type="button" 
              className="deletemember"
              onClick={this.handleClickDelete}
            >Delete Member</button>
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