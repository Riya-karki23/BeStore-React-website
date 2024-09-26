import React, { useState } from 'react'
import './index.css'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import FeaturesHover from './HoverComponent/FeaturesHover';
import PagesHover from './HoverComponent/PagesHover';
function Navbar() {
  const[showFeatureBox,setShowFeatureBox]=useState(false);
  const[showPageHoverBox,setShowPageHoverBox]=useState(false);


function showBox(){
setShowFeatureBox(true);
}

function hideBox(){
  setShowFeatureBox(false);
}

function showPageBox(){
setShowPageHoverBox(true);
}

function hidePageBox(){
  setShowPageHoverBox(false);
}

  return (
    <div className='nav-upper'>
        <div className="div-inner">

      <div className='nav-image'>
     <img src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore.png'/>
      </div>
      <div className='div-search'>
       <div className="search-icon"><IoSearchSharp /></div>
<input  className='nav-search' type="text" placeholder='Enter your search'/>
      </div>
      <div className='nav-icons'>
        <FaRegUser/>
        <div className='like-icon'><FaRegHeart/><span className='like-badge'>0</span></div>
        <IoBagOutline/>
      </div>
    </div>
    <div className="nav-bottom">
   <ul className='nav-ul'>
    <li style={{color: '#0089F7'}}>Home</li>
    <li onMouseEnter={showBox} onMouseLeave={hideBox}>Features <MdArrowDropDown/></li>
    <li>Shop</li>
    <li onMouseEnter={showPageBox} onMouseLeave={hidePageBox}>Pages <MdArrowDropDown/></li>
   </ul>
   <ul className='nav-ul '>
    <li>About</li>
    <li>Contacts</li>
    <li>Terms of Use</li>
   </ul>
    </div>
    {
      showFeatureBox &&
      <FeaturesHover/>
    
    }
    {
      showPageHoverBox &&
      <PagesHover/>
    
    }
    </div>
)
}

export default Navbar
