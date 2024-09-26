import React from 'react'
import './tooltip.css'

function Tooltip({tooltipText}) {
  return (
    <div className='tooltip-outer-div'>
      <p className='tooltip-text'>{tooltipText}</p>
    </div>
  )
}

export default Tooltip
