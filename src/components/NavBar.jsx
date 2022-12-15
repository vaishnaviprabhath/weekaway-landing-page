import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {BsChatSquareDots} from 'react-icons/bs'
import { FaFacebook,
         FaTwitter,FaGooglePlusG,FaInstagram,}  from 'react-icons/fa'

const NavBar = () => {
  return<div>
     <ul>
       <li>
         <a href="/">Home</a>
       </li>
       <li>
          <a href="#gallery">Gallery</a>
       </li>
       <li>
          <a href="#deals">Deals</a>
       </li>
       <li>
        <a href="#contact">Contact</a>
       </li>



     </ul>

    
    
    </div>;
};

export default NavBar;