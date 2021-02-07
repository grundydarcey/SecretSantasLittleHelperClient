import React from 'react';
import FinalDraw from './finaldraw';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Final Draw component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FinalDraw />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})