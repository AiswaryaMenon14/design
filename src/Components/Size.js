import React from 'react'
import './Style.css'
import insta from '../Images/insta.png'
import twit from '../Images/twit.png'
import face from '../Images/face.png'


function Size() {
  return (
    <div className="content2"style={{width:'30%'}}>
    <h3>SELECT SIZE(US)</h3>
    <ul className="size">
      <li className="button">8</li>
      <li className="button">8.5</li>
      <li className="button">9</li>
      <li className="button">9.5</li>
      <li className="button">10</li>
      <li className="button">10.5</li>
      <li className="button">11</li>
      <li className="button">11.5</li>
      <li className="button">12</li>
      <li className="button">12.5</li>
    </ul>
    <div className="colourop">
      <h3>SELECT COLOUR</h3>
      <ul className="colour"> 
        <li className="circle circle1"></li>
        <li className="circle circle2"></li>
        <li className="circle circle3"></li>
        <li className="circle circle4"></li>
        <li className="circle circle5"></li> 
        
       </ul> 
    </div>
    <div className="scroll">
    
    <div className='option'>
    <div><img src={insta} width={15} height={15}></img></div>
    <div><img src={twit} width={15} height={15}></img></div>
    <div><img src={face} width={15} height={15}></img></div>
    </div>
    </div>
  </div>
  )
}

export default Size
      