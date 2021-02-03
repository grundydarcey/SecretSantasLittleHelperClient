import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';
import { /*Route, */Link } from 'react-router-dom';

export default class Group extends React.Component {  

  static contextType = ApiContext;

  render() {
    const Groupmembers = this.context.members;
    return (    
      <div className="groupmembers">      
        <h1>Customize Your Group</h1>
        <div className="groupbody">
          <p>Feel free to use the edit, delete and create buttons to fine-tune your Secret Santa group below.</p><br />
          <ul className="members">
            {Groupmembers.map(member =>
            <li key={member.id} className="individuals">
              Name: {member.member_name}<br />
              Dollars: {member.dollars}<br />
              <Link to={'/members/' + member.id}>
                Edit/Remove Member
              </Link>
            </li>
            )}
            <br />
            <li className="newmember">
              <h2>Create New Member</h2>
              <Link to='/newmember'>Create New Member</Link>
            </li>
            </ul>
          <Link to ='/drawscreen'>Start Drawing Names!</Link><br />
        </div>
      </div>
    )
  }
}