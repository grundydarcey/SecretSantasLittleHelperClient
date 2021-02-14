import React from 'react';
import './group.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class Group extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reload: false
    }
    this.refreshMembers = this.refreshMembers.bind(this);
  }

  static contextType = ApiContext;

  refreshMembers = () => {
    
    window.location.reload(false)
    
  }

  componentDidMount() {
    console.log(this.state.reload)
    if (this.state.reload === false) {
      this.setState({ reload: true })
    }
    console.log(this.state.reload)
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
          <button type="button" className="refresh" onClick={this.refreshMembers}>Refresh Members</button><br />
          <ul className="members">
            {Groupmembers.map(member =>
            <li key={member.id} className="individuals">
              <br />
              Name: {member.member_name}<br />
              Dollars: {member.dollars}<br /><br />
              <Link to={'/members/' + member.id}>
                Edit/Remove Member
              </Link><br /><br />
            </li>
            )}
            <br />
            <li className="individuals">
              <p>Need someone new?</p>
              <Link to='/newmember'>Create New Member</Link><br /><br />
            </li>
          </ul><br /><br />
          <Link to ='/drawscreen'>Start Drawing Names!</Link><br /><br /><br />
        </div>
      </div>
    )
  }
}