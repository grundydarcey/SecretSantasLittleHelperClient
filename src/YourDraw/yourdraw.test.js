import React from 'react';
import YourDraw from './yourdraw';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Your draw component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <YourDraw />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})