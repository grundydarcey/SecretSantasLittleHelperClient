import React from 'react';
import Member from './Member';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Members component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Member />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})