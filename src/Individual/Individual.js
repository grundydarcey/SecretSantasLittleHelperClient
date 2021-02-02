import React from 'react';
import config from '../config';
//import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default class Individual extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    },
    onDeleteMember: () => { },
  }
  
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const memberId = this.context.members.id;
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
    console.log(this.props.match, 'this.rops.match')
    console.log(this.context, 'thiscontext')
    const individualMember = this.context.members

    console.log(this.props.match.params, 'this.props.match.params')
    
    return (
     
      <div className='member'>
        Here are the members:
        <h2>HARDCODED DELETE LATER: {individualMember[3].member_name}</h2>
        
      </div>
        
    )
  }
}
