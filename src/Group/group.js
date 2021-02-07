import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class Group extends React.Component {
  constructor(props) {
    super(props)
    this.refreshMembers = this.refreshMembers.bind(this);
  }

  static contextType = ApiContext;

  refreshMembers = () => {
    window.location.reload(false)
  }

  render() {
    const Groupmembers = this.context.members;
    return (    
      <div className="groupmembers"> 
      <br />     
        <h1>Customize Your Group</h1>
        <div className="groupbody">
          <p>Feel free to use the edit, delete and create buttons to fine-tune your Secret Santa group below.</p>
          <p>If you have made any of these changes, hit refresh to reflect your new group!</p><br />
          <button type="button" className="refresh" onClick={this.refreshMembers}>Refresh Members</button>
          <ul className="members">
            {Groupmembers.map(member =>
            <li key={member.id} className="individuals">
              Name: {member.member_name}<br />
              Dollars: {member.dollars}<br /><br />
              <Link to={'/members/' + member.id}>
                Edit/Remove Member
              </Link>
            </li>
            )}
            <br />
            <li className="individuals">
              <p>Need someone new?</p>
              <Link to='/newmember'>Create New Member</Link>
            </li>
          </ul>
          <Link to ='/drawscreen'>Start Drawing Names!</Link><br />
        </div>
      </div>
    )
  }
}