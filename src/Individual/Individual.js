import React from 'react';
import { ApiContext, ApiFetchContext } from '../ApiContext';
import './Individual.css';
import { Link } from 'react-router-dom';
import config from '../config';

export default class Individual extends React.Component {
 static defaultProps = {
   match: {
     params: {}
   },
   onDeleteMember: () => { },
 }
  //static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const memberId = this.props.id;
    fetch(`${config.API.ENDPOINT}/members/${memberId}`, {
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
        this.props.onDeleteMember(memberId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
      //const members = this.state;
    const { member_name, id, dollars } = this.props;
    console.log(member_name, 'membername')
    console.log(id, 'id')
    console.log(dollars, 'dollars')
    console.log(this.props, 'this.props')
    console.log(this.props.members, 'this.props.members')
    console.log(this.state, 'this.state')
    console.log(this.props.match, 'this.props.match')

    console.log(this.props.match.params, 'this.props.match.params')
    return (
     
      <div className='member'>
        Here are the members:
        <h2>{this.props.members.member_name}</h2>
      </div>
        
    )
  }
}
