import React from 'react';
import DrawScreen from './drawscreen';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('DrawScreen component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <DrawScreen />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})