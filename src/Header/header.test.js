import React from 'react';
import header from './header';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <header />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})