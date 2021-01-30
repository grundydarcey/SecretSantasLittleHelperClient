import React from 'react';
import './editmember.css';

export default class EditMember extends React.Component {
  render() {
    return (
    <div className='editmember'>
      <h1>Edit Member</h1>
      <p>{this.props.match.params.id}</p>
      <div className='editbody'>
        <form>
          <fieldset>
            <p>Alter information about a previously-created member here.</p>
            <label htmlFor="name" className="name">Name: </label>
            <input type="text" name="name" id="name"></input><br />
            <label htmlFor="dollar" className="dollar">Dollar amount of gift: </label>
            <input type="text" name="dollar" id="dollar"></input><br />
            <button type="submit" className="editsubmit">Save Changes</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
}