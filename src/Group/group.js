import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';
import Individual from '../Individual/Individual';
import { findMember } from '../member-helper';

export default class Group extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext;

  //handleDeleteMember = memberId => {
    //this.props.history.push(`/`)
  //}

  render() {
    const { members=[] } = this.context;
    const { memberId } = this.props.match.params;
    const member = findMember(members, memberId)
    console.log(members)
    console.log(memberId)
    console.log(member)
    return (
    <div className="groupmembers">
      <h1>Customize Your Group</h1>
      <div className="groupbody">
        <p>Feel free to use the edit, delete and create buttons to fine-tune your Secret Santa group below.</p><br />
        <Individual
          id={member.id}
          member_name={member.member_name}
          dollars={member.dollars}
          onDeleteMember={this.handleDeleteMember}
        />
        
        
        <ul className="members">
          <li className="individuals">
            <p>Name: </p>
            <p>Dollar amount: </p>
          </li>
          <li className="newmember">
            <h2>Create New Member</h2>
            <button type="button" className="newbutton">Add New Member Details</button>
          </li>
          </ul>
        <button className="begindrawing" type="button">Begin Drawing</button>
      </div>
    </div>
  )
}
}