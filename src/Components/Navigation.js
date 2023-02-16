
import './Style.css'
import logo from '../Images/logo.png'


function Navigation({cart}){
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
<span className='cartcount'>{cart}</span>

         
          </div>
        </div>
        </div>
        </div>
       
        </div>
      

      
    
    

)
}
export default Navigation