import React from 'react'

function Card({imageUrl,title,width}) {
  return (
    <div className='card' style={{width:width}}>
      <img className='card-image-icon' src={imageUrl}/>
      <p className='card-title-label'>{title}</p>
    </div>
  )
}

export default Card
