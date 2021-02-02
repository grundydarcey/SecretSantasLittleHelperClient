import React from 'react';

 const ApiContext = React.createContext({
  members: [],
  addMember: () => {},
  deleteMember: () => {},
})

export default ApiContext;