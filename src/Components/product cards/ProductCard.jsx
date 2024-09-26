import React from 'react'
import '../product cards/index.css'
import Button from '../Button/Button'

function ProductCard({imageUrl,btnColor,cardWidth}) {
  return (
    <div className='product-card' >
      <img className='card-image' style={{width:cardWidth || '586px'}} src={imageUrl} />
     <div className="text-wrapper">
      <h2>Vedeo </h2>
      <p>Feel of Sound</p>
      <Button btnColor={btnColor}/>
     </div>
    </div>
  )
}

export default ProductCard


