import React from 'react';

export default class SingleMember extends React.Component {
  state = {
    id: null
  }

  componentDidMount() {
      console.log(this.props)
    let id = this.props.match.params.memberId;
    this.setState({
        id: id
    })
  }
    render() {
      return (
          <div className="container">
              <h4>{this.state.id}</h4>
          </div>
      )
  }
}