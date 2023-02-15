import React from 'react'
import './Style.css'
import preview from '../Images/preview.png'
import next from '../Images/next.png'
function Dowm() {
  return (
    <div className='down'>
    <div className='prevnext'>
        <div> prev
          <div>
          <img src={preview} width={31} height={15}></img></div>
        </div>
        <div> Next<div>
          <img src={next} width={31} height={15}></img></div>
        </div>
    </div>
    <div className='rate'>ADD TO CART-$95.97</div>
    </div>
  )
}

export default Dowm