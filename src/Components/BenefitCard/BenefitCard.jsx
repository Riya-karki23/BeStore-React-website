import React from 'react'
import './BenefitCard.css'

function BenefitCard({data}) {
  return (
    <div className='benefitCard-wrapper'>
      <img className='benefit-image' src={data.image}/>
      <p className='benefit-title'>{data.title}</p>

      <p className='benefit-para'>{data.description}</p>
    </div>
  )
}

export default BenefitCard
