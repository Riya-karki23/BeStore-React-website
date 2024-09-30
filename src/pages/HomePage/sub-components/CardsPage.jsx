import React from 'react'
import Card from '../../../Components/Card'
import './index.css'
import Counter from '../../../Components/Counter'

function CardsPage() {
  return (
    <>
    <Counter/>
    <div className='CardComponent'>
      <Card className='card-box' imageUrl={'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon1.webp'}title='Notebooks'/>
     
      
        <Card className='card-box' imageUrl={'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon2.webp'}title='Smartphones'/>
       
      
        <Card className='card-box'  imageUrl={'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon3.webp'} title='Smartwatches'/>
       
      
        <Card className='card-box' imageUrl={'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon4.webp'}title='TV/Audio'/>
       
      
        <Card className='card-box' imageUrl={'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon5.webp'}title='Gaming'/>
       
      
        <Card className='card-box' imageUrl={'https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-home-icon6.webp'}title='Accessories'/>
       
    </div>
    </>
  )
}

export default CardsPage
