import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';
import Individual from '../Individual/Individual';

export default class Group extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      isLoading: false
    }
 }  
  
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext;

  render() {
    const members = this.props.members;
    console.log(this.props, 'this.props')
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