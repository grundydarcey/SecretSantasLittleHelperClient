import React from 'react';
import FurtherDrawScreen from './FurtherDrawScreen';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Further Draw Screen component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FurtherDrawScreen />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div);
  })
})