import React from 'react';

 const ApiContext = React.createContext({
  members: [],
  addMember: () => {},
  deleteMember: () => {},
  editMember: () => {},
  selectedMember: [],
  remainingDrawPool: [],
  remainingDrawerPool: [],
  previouslySelectedMember: [],
  drawingBegan: false
})

export default ApiContext;