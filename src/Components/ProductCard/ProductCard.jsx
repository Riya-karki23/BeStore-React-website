import React from 'react'
import './index.css';
import Button from '../Button/Button'

function ProductCard({imageUrl,textColor,btnText,title,text,btnColor,cardWidth,right,top,left,bottom}) {
  return (
    <div className='product-card'  >
      <img className='card-image' style={{width:cardWidth || '586px' }}  src={imageUrl} />
     <div className="text-wrapper"  style={{right:right , top:top , left:left , bottom :bottom , color:textColor}}>
      <h2>{title} </h2>
      <p>{text}</p>
      <Button btnColor={btnColor} textColor={btnText}/>
     </div>
    </div>
  )
}

export default ProductCard