import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram,BsWhatsapp }  from "react-icons/bs"
import  { AiFillTwitterCircle } from "react-icons/ai"
  import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
           
          
               <div className="footer-container"> 
               
               <div className='first-section'>
                      <h2> We are social </h2>
                          <h1> Follow us with </h1>
                        <ul>
                        <li>  <BsFacebook /> </li>
                          <li>  <AiFillTwitterCircle/> </li>
                          <li> < BsInstagram/> </li>
                          <li>  <BsWhatsapp/> </li>
                        </ul>
                        <img className='footer-img' src="https://i.ibb.co/NYHNWXC/kevin-canlas-QYHeh-J9-Iovs-unsplash.jpg" alt="MK"/>
                     </div>

                     
                     <div className='second-section'>
                         <h1>Links </h1>
                         <ul>
                         <Link to="home"> ADVERTISERS </Link>
                         <Link to="blogs"> PUBLISHERS </Link>
                         <Link to="login"> INFLUENCERS </Link>
                         <Link to="register"> AD FORMATS </Link>
                         </ul>
                      
                     </div>
                     <div className=' third-section '>
                       <h1 className='footer-about'> Documentation </h1>
                        <ul>
                          <li> Terms & Condition </li>
                          <li> PRIVACY POLICY </li>
                          <li> CANCELLATION POLICY </li>
                          <li> BLOG </li>
                        </ul>
                     </div>
                     <div className=' fourth-section '>
                       <h1 className='footer-about'> Support </h1>
                        <ul>
                          <li> FAQ </li>
                          <li> MEDIA KIT </li>
                          <li> Contact us </li>
                        </ul>
                     </div>
                     
               </div>
            
                
           
        </div>
    );
};

export default Footer;