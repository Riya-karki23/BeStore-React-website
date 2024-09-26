import React from 'react'
import cardData from './cardData'
import './index.css'
import Card from '../../../../Components/promotionsCard/Card'
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";

function PromotionCards() {
  
  return (
    <div className='promotion-outer-div'>
      <div className='outer-div-top' >
        <p className='promotion-heading'>
          Hot promotions</p>
        <div className="icons">
         <span className='arrow-icon'> <IoChevronBack/></span>
         <span className='arrow-icon'><IoChevronForward/></span>
        </div>
        </div>
    <div className='parentCard'>
      {
        cardData.map((data,index)=>(
          <Card data={data} key={index}/>
        ))
      }
      
    </div>
    <div className='bottom-scroll-icons'>
<BiSolidHomeAlt2 className='home-icon'/>
<FaCircle className='circle-icon '/>
    </div>

    </div>
  )
}

export default PromotionCards
