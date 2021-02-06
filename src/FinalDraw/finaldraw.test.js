import React from 'react';
import FinalDraw from './finaldraw';
import handleRestart from './finaldraw'

it('should reset the context arrays', () => {
  const testToDraw = [];
  const testAlreadyDrawn = [{id: 1, member_name: 'darcey', dollars: 20}, {id: 2, member_name: 'sabrina', dollars: 20}, {id: 3, member_name: 'zoey', dollars: 20}];
  const testGroupMembers = [{id: 1, member_name: 'darcey', dollars: 20}, {id: 2, member_name: 'sabrina', dollars: 20}, {id: 3, member_name: 'zoey', dollars: 20}];
  expect(handleRestart(testToDraw)).toBe(testGroupMembers)
})