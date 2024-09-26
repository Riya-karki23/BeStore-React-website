import React from 'react'

function Card({imageUrl,title}) {
  return (
    <div className='card'>
      <img src={imageUrl}/>
      <p>{title}</p>
    </div>
  )
}

export default Card
