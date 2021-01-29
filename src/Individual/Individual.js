import React from 'react';
import ApiContext from '../ApiContext';
import './Individual.css';
import config from '../config';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Individual extends React.Component {
  //static defaultProps = {
    //match: {
    //params: {}
    //},
    //onDeleteMember: () => { },
  //}

  constructor(props) {
    super(props);
  }

  static contextType = ApiContext;
  


  render() {
      //const members = this.state;
    const { member_name, id, dollars } = this.props.members;
    //console.log(this.props)
    console.log(member_name)
    //console.log(id)
    //console.log(dollars)
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


Individual.propTypes = {
  onDeleteMember: PropTypes.func,
  id: PropTypes.string.isRequired,
  member_name: PropTypes.string.isRequired,
  dollars: PropTypes.string.isRequired
}