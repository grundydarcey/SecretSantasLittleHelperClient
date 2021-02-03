import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';

export default class YourDraw extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMember: [],
      remainingDrawPool: [],
      remainingDrawerPool: [],
      previouslySelectedMember: [],
    }
  }

  static contextType = ApiContext;

  componentDidMount() {
    const memberSelect = this.context.selectedMember
    const Groupmembers = this.context.members;
    const remainingMembers = this.context.remainingDrawerPool
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })
    const randomMember =  minusDrawerGroup[Math.floor(Math.random()*minusDrawerGroup.length)]
    const newDrawGroup = Groupmembers.filter(function(obj) {
      return obj.id !== randomMember.id
    })
    const newDrawerGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })

    this.context.remainingDrawPool = newDrawGroup;
    this.context.remainingDrawerPool = newDrawerGroup;
  }
  
  render() {
    const memberSelect = this.context.selectedMember
   // console.log(memberSelect, 'CURRENT CONTEXT')
    const Groupmembers = this.context.members;
    
  const minusDrawerGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })

    //console.log(minusDrawerGroup, 'NEWDRAWINGARRAY')
  const pushTo = this.context.previouslySelectedMember
  console.log(pushTo)

    //const newDrawerGroup =

    const randomMember =  minusDrawerGroup[Math.floor(Math.random()*minusDrawerGroup.length)]
    //console.log(randomMember, 'randommember exclude from new drawgroup')
    const drawer = memberSelect.member_name;

   /*const newDrawGroup = Groupmembers.filter(function(obj) {
      return obj.id !== randomMember.id
    })
*/
    //console.log(newDrawGroup, 'newDrawGroup')
    return (
      <div className='drawing'>
        <h1>{drawer}'s Draw</h1>
        <div className="drawbody">
          <p>Here's the moment you've been waiting for... check the nice list again...</p>
          <div className="drawname">
            <h2>You've drawn...</h2>
            {randomMember.member_name}
          </div>
          <p>Now before you pass the device to the next person in line, hit the 'Ready to Pass' button so they don't see who you're buying a gift for!</p><br />
          <Link to ='/drawscreen'>Ready to pass?</Link>
        </div>
      </div>
    )
  }
}