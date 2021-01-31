import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class Group extends React.Component {  
  static contextType = ApiContext;

  componentDidMount() {
    this.setState({ members: this.props.members })
  }

  /*componentDidUpdate(prevProps) {
    if(prevProps.members !== this.props.members) {
      this.updateAndNotify();
    }
  }*/

  render() {
    console.log(this.context, 'this.context')
    console.log(this.props.match.params, 'this.props.match.params')
    const Groupmembers = this.context.members;
    console.log(Groupmembers, 'groupmembers new with context')
      return (
      <div className="groupmembers">      
        <h1>Customize Your Group</h1>
        <div className="groupbody">
          <p>Feel free to use the edit, delete and create buttons to fine-tune your Secret Santa group below.</p><br />
          <ul className="members">
            {Groupmembers.map(member =>
            <li key={member.id}>
              Name: {member.member_name}<br />
              Dollars: {member.dollars}<br />
              
              <button className="deletemember">Delete</button>
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