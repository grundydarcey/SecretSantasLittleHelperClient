import React from 'react';
import LandingPage from './landing-page';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Landing page component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})