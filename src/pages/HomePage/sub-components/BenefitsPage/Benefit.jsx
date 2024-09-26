import React from 'react'
import './benefit.css'
import benefitData from './benefitData'
import BenefitCard from '../../../../Components/BenefitCard/BenefitCard'

function Benefit() {
  return (
    <div className='benefit-outer-div'>
      <div className="benefit-heading">
        <p>
        Betheme offers you convenient </p>
        <p>shopping experience at any scale</p>
      </div>
      <div className="benefit-cards-wrapper">
        {
          benefitData.map((data,index)=>(
            <BenefitCard key={index} data={data}/>
          ))
        }
      </div>
    </div>
  )
}

export default Benefit
