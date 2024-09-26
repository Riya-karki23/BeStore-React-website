import React from 'react'
import '../../src/index.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Navbar from '../Components/Navbar'

function Header() {
  return (
    <div className="combined-header">
    <div className='header-top'>
        <div className="header-top-text">
      <p >Free Shipping over $100 & 60 days returns</p>
      </div>
      <div className="top-icons">
       <FaFacebookF className='icon'/>
       <FaXTwitter className='icon'/>
       <FaVimeoV className='icon'/>
       <FaInstagram className='icon'/>
      </div>

    </div>
    <Navbar/>
    </div>
  )
}

export default Header
