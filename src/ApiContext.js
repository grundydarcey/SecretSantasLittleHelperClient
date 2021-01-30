import React from 'react';
import config from './config';

const ApiContext = React.createContext({
  members: [],
  addMember: () => {},
  deleteMember: () => {},
})

