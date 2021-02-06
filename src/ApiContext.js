import React from 'react';

 const ApiContext = React.createContext({
  members: [],
  addMember: () => {},
  deleteMember: () => {},
  editMember: () => {},
  selectedMember: [],
  remainingDrawerPool: [],
  previouslySelectedMember: [],
  toDraw: [],
  alreadyDrawn: [],
  currentDraw: [],
})

export default ApiContext;