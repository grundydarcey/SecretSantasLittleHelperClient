import React from 'react';
import './group.css';
//import { ApiContext, ApiFetchContext } from '../ApiContext';
//import { getMembers } from '../member-helper';
//import Individual from '../Individual/Individual';

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

 // static contextType = ApiContext;

  componentDidMount() {
    this.setState({ members: this.props.members })
  }

  componentDidUpdate(prevProps) {
    console.log('Called after render state')
    console.log(prevProps)
    if(prevProps !== this.props) {
      this.updateAndNotify();
    }
  }

  render() {

  
    const Groupmembers = this.props.members;
   // console.log(this.props.members, 'this.props.members')
    console.log(Groupmembers, 'groupmembers')

    //const { memberId } = this.props.members[0].id
    //const allMembers = getMembers(Groupmembers, memberId)
    console.log(this.props.match.params, 'this.props.match.params')
    const membersList = Groupmembers.length ? (
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
    )
    return (
    <div className="groupmembers">
      
      <h1>Customize Your Group</h1>
      <div className="groupbody">
        <p>Feel free to use the edit, delete and create buttons to fine-tune your Secret Santa group below.</p><br />
        {membersList}
        <ul className="members">
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