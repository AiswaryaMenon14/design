import Contents from './Contents'
import './Style.css'
import logo from '../Images/logo.png'
import signin from '../Images/signin.png'
import shopping from '../Images/shopping.png'

import insta from '../Images/insta.png'
import twit from '../Images/twit.png'
import face from '../Images/face.png'
import Dowm from './Dowm'

function Navigation(){
return (
    <div>

    <div>
    <div className="first">
         <div className="icon">
            <img className='logo' src={logo} width={95} height={1}/></div>
       <div className='select'>
        <div className='new'>NEW RELEASE</div>
        
        <div className='men'>MEN</div>
        
        <div className='women'>WOMEN</div>
        
        <div className='kid'>KIDS</div>
       
        <div className='customize'>CUSTOMIZE</div>
        </div>

        <div className='logc'>
        <div className='login'>
        <span class="material-symbols-outlined">
account_circle
</span>
         
</div>
       
        <div className='cart'>
        <span class="material-symbols-outlined">
shopping_bag

</span>
<span className='cartcount'>sd</span>

          {/* <img src={shopping} width={25} height={25}></img> */}
          </div>
        </div>
        </div>
        </div>
        {/* <Contents/>
         {/* <div className='nimage'>
     
         <div className='text'><h3>SCROLL DOWN</h3></div>
         <div className='option'>
        <div><img src={insta} width={15} height={15}></img></div>
        <div><img src={twit} width={15} height={15}></img></div>
        <div><img src={face} width={15} height={15}></img></div>
        </div>
         </div> */}
        
        {/* <Dowm/>  */}
        </div>
      

      
    
    

)
}
export default Navigation