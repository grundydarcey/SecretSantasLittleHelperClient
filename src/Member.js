import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class Member extends Component {
  render() {
    return (
      <div className="member">
        <h4>Here are my route parameters</h4>
      </div>
    )
  }
}