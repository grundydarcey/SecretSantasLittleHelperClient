import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';
import ApiContext from '../ApiContext';

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null,
      onDeleteMember: () => { },
      onEditMember: () => { },
      member_name: '',
      dollars: '',
    }
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
    this.handleDollarInputChange = this.handleDollarInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  getMemberFields() {
    let id = this.props.match.params.member_id;
    axios.get(`${config.API_ENDPOINT}/members/` + id)
    .then(response => {
      this.setState({ 
        member_name: response.data.member_name,
        dollars: response.data.dollars,
      }, () => {
      })
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getMemberFields();
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

  editMember(newMember) {
    axios.request({
      method: 'PATCH',
      url: (`${config.API_ENDPOINT}/members/${this.props.match.params.member_id}`),
      data: newMember
    }).then(response => {
      this.props.history.push('/members');
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const newMember = {
      member_name: e.target.name.value,
      dollars: e.target.dollar.value
    }
    this.editMember(newMember);
    e.preventDefault();
    this.props.history.push('/members')
  }

  handleNameInputChange(e) {    
    this.setState({
      member_name: e.target.value
    })
  }

  handleDollarInputChange(e) {
    this.setState({
      dollars: e.target.value
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
    //const member = this.state.member ?  (
      const member = this.context.members ? (
      <div className='center'>
        <h2>You are now editing information for group member {this.context.members.member_name} with a ${this.context.members.dollars} limit.</h2><br />
        <div className='editbody'>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <p>Alter information about a previously-created member here.</p>
            <label 
              htmlFor="name" 
              className="name"
            >Name: </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={this.handleNameInputChange} 
              value={this.state.member_name}
            ></input><br />
            <label 
              htmlFor="dollar" 
              className="dollar"
            >Dollar amount of gift: </label>
            <input 
              type="text" 
              name="dollar" 
              id="dollar" 
              value={this.state.dollars} 
              onChange={this.handleDollarInputChange}
            ></input><br />
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