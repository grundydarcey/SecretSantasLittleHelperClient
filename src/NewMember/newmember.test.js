import React from 'react';
import NewMember from './newmember';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('New member component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NewMember />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})