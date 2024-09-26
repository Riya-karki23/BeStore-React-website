import React from 'react';
import './featureProduct.css';
import featureProductsData from './featureData';
import Card from '../../../../Components/promotionsCard/Card';
import Button from '../../../../Components/Button/Button';

function FeaturedProducts() {
  return (
    <div className='feature-outer-div'>
      <h1 className='feature-title'>Featured products</h1>
      <div className="outer-card-wrapper">
      {
        featureProductsData.map((data,index)=>(
<Card data={data} key={index} className='card-component'/>
))
      }
    </div>
    <Button btnColor='#dcdcdc' btnText='Browse more'/>
    </div>
  )
}

export default FeaturedProducts
