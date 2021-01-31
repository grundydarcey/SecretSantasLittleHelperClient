import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';

export default class Group extends React.Component {  
 /*state = {
      members: [],
      isLoading: false
    }
*/
  
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext;

  componentDidMount() {
    this.setState({ members: this.props.members })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.members !== this.props.members) {
      this.updateAndNotify();
    }
  }

  render() {
   // const Groupmembers = this.props.members;
   
    //console.log(this.members, 'this.members')
    //console.log(Array.isArray(Groupmembers));
    //const groupString = JSON.stringify(Groupmembers);
    //console.log(groupString, 'groupstring')
    //console.log((typeof Groupmembers));
    console.log(this.context, 'this.context')
   // console.log(this.props.members, 'this.props.members')
    //console.log(Groupmembers, 'groupmembers')

    //const { memberId } = this.props.members[0].id
    //const allMembers = getMembers(Groupmembers, memberId)
    console.log(this.props.match.params, 'this.props.match.params')
    /*const membersList = groupString.length ? (
      Groupmembers.map(member => {
        return (
          <div className="group" key={member.id}>
            <p>{member.member_name}</p>
          </div>
        )
      })
    ) : (
      <div className="alternate">
        No people yet
      </div>
    )*/
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
            <button className="editmember">Edit</button>
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