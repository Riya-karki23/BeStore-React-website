import React from 'react'
import './heading.css';
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';


function Heading() {
  return (
    <div className="shop-main-wrapper">
  <p className='shop-title'>
    Shop
  </p>
  <div className="shop-bottom-link">
   <Link to='/' className='home-link'> <p>
  Home
    </p></Link>
    <IoIosArrowForward/>
    <p>
  Shop
    </p>
  </div>
 </div>
  )
}

export default Heading
