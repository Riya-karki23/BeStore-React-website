import React from 'react'

function Card({imageUrl,title,width}) {
  return (
    <div className='card' style={{width:width || '150px'}}>
      <img src={imageUrl}/>
      <p>{title}</p>
    </div>
  )
}

export default Card
