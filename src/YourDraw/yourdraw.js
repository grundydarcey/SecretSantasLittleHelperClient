import React from 'react';
import './yourdraw.css';
import ApiContext from '../ApiContext';
import { Link } from 'react-router-dom';
import FinalDraw from '../FinalDraw/finaldraw'

export default class YourDraw extends React.Component {
  
  static contextType = ApiContext;

  componentDidMount() {
    const memberSelect = this.context.selectedMember
    const Groupmembers = this.context.members;
    const remainingMembers = this.context.remainingDrawerPool
    /*const minusDrawerGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })*/
    const pastMembers = this.context.previouslySelectedMember;
    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)
    const minusDrawerGroup = Groupmembers.filter(function(obj) {
      const checkId = pastMemberIds.includes(obj.id)
      if (checkId === false) {
        return obj.id
      }
    })
    const randomMember =  minusDrawerGroup[Math.floor(Math.random()*minusDrawerGroup.length)]
    const newDrawGroup = Groupmembers.filter(function(obj) {
      return obj.id !== randomMember.id
    })
    const newDrawerGroup = Groupmembers.filter(function(obj) {
      return obj.id !== memberSelect.id
    })

    this.context.remainingDrawPool = newDrawGroup;
    this.context.remainingDrawerPool = minusDrawerGroup;
  }
  
  render() {
    const memberSelect = this.context.selectedMember
    console.log(memberSelect, 'CURRENT CONTEXT')
    console.log(this.context.selectedMember)
    const Groupmembers = this.context.members;
    const pastMembers = this.context.previouslySelectedMember;
    console.log(pastMembers)

    const pastMemberIds = pastMembers.map(pastMember =>
      pastMember.id)

    console.log(pastMemberIds)

    const testArray = [1, 2, 3, 4]

   /*const testDrawerGroup = Groupmembers.filter(function(obj) {
    const checkId = testArray.includes(obj.id)
    console.log(checkId)
   })
*/
 //  const secondTest = testArray.includes(2)
  // console.log(secondTest)

  // if pastmemberids does not includes object id equals

  /* const hypo = Groupmembers.filter(function(obj) {
     const checkId = pastMemberIds.includes(obj.id)
     if (checkId == false) {
       return obj.id
     }
   })*/ 

  const minusDrawerGroup = Groupmembers.filter(function(obj) {
    const checkId = pastMemberIds.includes(obj.id)
    if (checkId === false) {
      return obj.id
    }
  })

    const randomMember =  minusDrawerGroup[Math.floor(Math.random()*minusDrawerGroup.length)]

    const drawer = memberSelect.member_name;
   /*const newDrawGroup = Groupmembers.filter(function(obj) {
      return obj.id !== randomMember.id
    })
*/
    //console.log(newDrawGroup, 'newDrawGroup')

    const noDrawingsLeft = (Groupmembers.length - pastMembers.length === 1) ? (
    <div className="finalDraw">
      <Link to='/finaldraw'>All finished?</Link>
    </div> 
    ) : (
      <div className="drawAgain">
        <Link to='/drawscreen'>Read to pass?</Link>
      </div>
    )
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
          
          <Link to ='/drawingscreen'>Ready to pass?</Link>
        
        </div>
      </div>
    )
  }
}