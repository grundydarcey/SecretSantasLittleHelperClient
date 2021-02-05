import React from 'react';

 const ApiContext = React.createContext({
  members: [],
  addMember: () => {},
  deleteMember: () => {},
  editMember: () => {},
  selectedMember: [],
  //remainingDrawPool: [],
  remainingDrawerPool: [],
  previouslySelectedMember: [],
  drawingBegan: false,
  toDraw: [],
  alreadyDrawn: [],
  currentDraw: [],
})

export default ApiContext;