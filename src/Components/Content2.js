import React, { useState } from 'react'
import './Style.css'

import preview from '../Images/preview.png'
import next from '../Images/next.png'

import play from "../Images/play.png";
import pdt11 from '../Products/Product1/image36.png'
import pdt12 from '../Products/Product1/image37.png'
import pdt13 from '../Products/Product1/image38.png'
import pdt14 from '../Products/Product1/image39.png'
import pdt15 from '../Products/Product1/image40.png'
import pdt21 from '../Products/Product2/image.png'
import pdt22 from '../Products/Product2/imag3.png'
import pdt23 from '../Products/Product2/image35.png'
import pdt24 from '../Products/Product2/image65.png'
import pdt31 from '../Products/Product3/image32.png'
import pdt32 from '../Products/Product3/image33.png'
import pdt33 from '../Products/Product3/image34.png'
import Size from './Size';


function Content2({addtocart,price,shoe}) {
  
    const imgs=[
        {id:0,value:pdt11},
        {id:1,value:pdt12},
        {id:2,value:pdt13},
        {id:3,value:pdt14},
        {id:4,value:pdt15}
    ]
    const imgs2=[
      {id:0,value:pdt21},
      {id:1,value:pdt22},
      {id:2,value:pdt23},
      {id:3,value:pdt24}
  ]
  const imgs3=[
    {id:0,value:pdt31},
    {id:1,value:pdt32},
    {id:2,value:pdt33}
]
const cart=0
    const[colour,setColour]=useState('')
    const[image,setImage]=useState(imgs2)
    const [sliderData,setSliderData]=useState(imgs2[0].value)
    const handleClick=(index)=>{
       
        setSliderData(index)
    }

const [selected, setSelected] = useState(false);
function handleClickd() {
  setSelected(!selected);
}


  return (
    <div>
    <div className='contnt'style={{width:'70%'}}>
    <div className="image"style={{width:'97%'}}>
      <img src={sliderData} width="200"/>
        <div>
        {
            image.map((data)=>
            <img key={data.id} src={data.value} onClick={()=>handleClick(data.value)} width="100"/>,
          
            )
        }
        </div>
      
    <div>Price:${shoe}</div>
    <div className='addcart'>
      <button style={{backgroundColor:"orange"}} onClick={()=>addtocart()}>Add to cart</button>
    </div>
    
        <div>
          <img src={play} width={35} height={35} />
        </div>
      </div>
      <Size colour={colour}  setColour={(value)=>{setColour(value);
      if(value==='brown'){
        handleClickd()
        setImage(imgs)
        setSliderData(imgs[0].value)//value is the image in the array we create
      }else if(value==='black'){
        setImage(imgs2)
        setSliderData(imgs2[0].value)
      }else if(value==='blue'){
        setImage(imgs3)
        setSliderData(imgs3[0].value)
      }
      }} />
      </div>
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
    <div className='rate'>ADD TO CART-${price}</div>
    </div>
      </div>
  )
}

export default Content2