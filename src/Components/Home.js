import React,{useState} from 'react'
import Navigation from './Navigation';

import Content1 from "./Content1";
import Content2 from "./Content2";
// import Dowm from './Dowm'

function Home() {
  const shpr=95
const[data,setData]=useState(0)
const[price,setPrice]=useState(0)
const addtocart=()=>{
  console.log('first')
 setData(data+1)
 setPrice(price+shpr)
  

}
  return (
    <div>
      <Navigation cart={data}/>
      <div className="contents">
      <Content1/>
      <Content2 addtocart={addtocart} price={price} shoe={shpr}/>
      

      
        
    </div>
      {/* <Dowm/>  */}
    </div> 
  )
}

export default Home