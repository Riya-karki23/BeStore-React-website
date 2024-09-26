import React from 'react'
import '../Button/index.css'

function Button({btnColor,btnText="Browse products"}) {
  return (
    <div className='btn' style={{backgroundColor:btnColor}}>
      {btnText}
    </div>
  )
}

export default Button
