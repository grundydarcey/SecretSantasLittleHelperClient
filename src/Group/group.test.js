import React from 'react';
import Group from './group';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

describe(`Group members component`, () => {
 
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
          <Group />
        </BrowserRouter>,
        div
      )
      ReactDOM.unmountComponentAtNode(div);
  })  

 
})