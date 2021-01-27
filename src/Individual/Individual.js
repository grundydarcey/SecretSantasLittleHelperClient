import React from 'react';
import ApiContext from '../ApiContext';
import './Individual.css';
import config from '../config';
import { Link } from 'react-router-dom';

export default class Individual extends React.Component {
  //static defaultProps = {
    //match: {
      //params: {}
    //},
    //onDeleteMember: () => { },
  //}

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      member_name: '',
      dollars: Number()
    }
   }

  static contextType = ApiContext;
  
  handleClickDelete = e => {
    e.preventDefault()
    const memberId = this.props.id;
    fetch(`${config.API_ENDPOINT}/members/${memberId}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.context.deleteMember(memberId)
        this.props.onDeleteNote(memberId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { member_name, id, dollars } = this.props;
    console.log(member_name)
    console.log(id)
    console.log(dollars)
    return (
      <div className='member'>
        <h2 className='member__name'>
          <Link to={`/members/${id}`}>
            {member_name}
          </Link>
        </h2>
        <button
          className="member__delete"
          type="button"
          onClick={this.handleClickDelete}
        >
        Delete!    
        </button>
      </div>     
    )
  }
}