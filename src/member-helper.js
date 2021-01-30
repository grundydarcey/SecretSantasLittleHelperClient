export const findMember = (members=[], memberId) =>
  members.find(member => member.id === memberId);


export const getMembers = (members=[], memberId) => (
  (!memberId)
  ? members
  : members.filter(member => member.id === memberId)
)