import React,{useContext, useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

    const[menu,setMenu] = useState("home");

    const{getTotalCartAmount} = useContext(StoreContext);
    const user=JSON.parse(sessionStorage.getItem("user"))

    console.log(user)



  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo'/>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer'  onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt=''/> */}
        <Link to='/cart' className="navbar-search-icon">
            <img src={assets.basket_icon} alt=''/>
            <p>Cart</p>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </Link>
        {user?<div style={{color:"white",borderRadius:"100%", padding:"10px",backgroundColor:"purple", width:"40px",textAlign:"center"}}>{user.email.slice(0,1).toUpperCase()}</div>:<button onClick={()=>setShowLogin(true)}>Sign up</button>}

      </div>
    
    </div>
  )
}

export default Navbar
