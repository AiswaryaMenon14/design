import React, { useState } from 'react'
import './Style.css'
// import Air from "../Images/Air Edge 270.png";
// import im from "../Product 3/Product 1/image 36.png";
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


function Content2() {
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
    const [sliderData,setSliderData]=useState(imgs2[0])
    const handleClick=(index)=>{
        console.log(index)
        const slider=imgs2[index]
        setSliderData(slider)
    }
  return (
    <div className="image"style={{width:'97%'}}>
      <img src={sliderData.value} width="200"/>
        <div>
        {
            imgs2.map((data,i)=>
            <img key={data.id} src={data.value} onClick={()=>handleClick(i)} width="100"/>
            )
        }
        </div>
      {/* <img src={Air} style={{width:'97%'}} /> */}
    
    {/* <img src={im} style={{width:'55%'}} /> */}
    <div>Price:$90.00</div>
    <div className='addcart'>
      <button style={{backgroundColor:"orange"}}>Add to cart</button>
    </div>
    
        <div>
          <img src={play} width={35} height={35} />
        </div>
      </div>
  )
}

export default Content2