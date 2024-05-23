import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img className='lastlogo' src={assets.logo} alt=''/>
            <p>At TasteTraverse, we believe that great food has the power to transcend boundaries and ignite unforgettable experiences. Born from a passion for culinary exploration, we curate a diverse selection of dishes from around the world, each one carefully chosen to tantalize your taste buds and transport you to new culinary horizons.</p>
            <div className='footer-social-icons'>
                <a href='https://www.facebook.com/' target='_'><img src={assets.facebook_icon} alt=''/></a>
                <a href='https://www.twitter.com/' target='_'><img src={assets.twitter_icon} alt=''/></a>
                <a href='https://www.linkedin.com/' target='_'><img src={assets.linkedin_icon} alt=''/></a>
            </div> 
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9191919191</li>
                <li>contact@TasteTraverse.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © TasteTraverse.com - All Right Reserved.</p>
      
      
    </div>
  )
}

export default Footer
