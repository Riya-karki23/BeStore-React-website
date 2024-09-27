import React from 'react'
import './product.css';
import ProductCard from '../../../../Components/product cards/ProductCard'
import Button from '../../../../Components/Button/Button'

function ProductsPage() {
  return (
    <>
    <div className='products-page'>
      <h2 className='product-title'>
       Our top products
      </h2>
    </div>
    <div className="card-main-div">
    <div className="card-top-div">
      <ProductCard imageUrl='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-wrap-bg1.webp' btnColor='white'/>
      <ProductCard imageUrl='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-wrap-bg2.webp' btnColor='#0089F7'/>
      </div>
      <div className="card-bottom-div">
      <ProductCard className='card-3' imageUrl=' https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-wrap-bg3.webp' btnColor='#0089F7' cardWidth='700px'/>
      <div className="card-4">
        <h2 className='card4-heading'>
         Ending soon
        </h2>
        <p className='card4-title'>
        Remaining time for special deal products. Hurry up!
        </p>
        <div className="outer-time-div">
          <div className="days-div ">
           <p className='number-days' >00</p>
           <p className='time-title'>days</p>
          </div>
          <div className="hour-div">
          <p className='number-days'>00</p>
          <p className='time-title'>hours</p>
          </div>
          <div className="minutes-div">
          <p className='number-days'>00</p>
           <p className='time-title'>minutes</p>
          </div>
        </div>
        
        <Button btnColor='white'/>
      </div>
      </div>
      </div>
      </>
  )
}

export default ProductsPage
