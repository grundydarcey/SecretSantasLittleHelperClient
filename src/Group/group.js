import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';
import Individual from '../Individual/Individual';
import { findMember } from '../member-helper';
import PropTypes from 'prop-types';

export default class Group extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }
  
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
    const members = this.props.membersData.members;
   // const membersArr = members.split(',');
    //const { thesemembers=[] } = this.context;
    //console.log(this.props.membersData.members[0].id, 'just to check this.props')
    //const { memberId } = this.props.membersData.members[0].id;
    //const member = findMember(members, memberId) || { content: '' }
    //console.log(thesemembers, 'thesemembers');
    console.log(members)
    //console.log(memberId, 'member id')
    //console.log(membersArr, 'this should be better for mapping');
    //const membersData = this.state;
    //console.log(member, 'this is end result member');
    return (
    <div className="groupmembers">
      <h1>Customize Your Group</h1>
      <div className="groupbody">
        <p>Feel free to use the edit, delete and create buttons to fine-tune your Secret Santa group below.</p><br />
        
        <ul className="members">
        {members.map(members =>
            <li key={members.id}>
              <Individual
                id={members.id}
                member_name={members.member_name}
                dollars={members.dollars}
              />
            </li>
          )} 
          <li>
            hi there
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

Group.propTypes = {
  members: PropTypes.array.isRequired
}