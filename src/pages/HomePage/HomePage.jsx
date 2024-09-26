import React from 'react'
import Home from './sub-components/Home'
import Counter from '../../Components/Counter'
import CardsPage from './sub-components/CardsPage'
import PromotionCards from './sub-components/PromotionsPage/PromotionCards';
import ProductsPage from './sub-components/ProductsPage';
import FeaturedProducts from './sub-components/Featured products/FeaturedProducts';
import Benefit from './sub-components/BenefitsPage/Benefit';
import SliderPage from './sub-components/SliderPage/SliderPage';

function HomePage() {
  return (
    <>
    <Home/>
    <Counter/>
    <CardsPage/>
    <PromotionCards/>
    <ProductsPage/>
    <FeaturedProducts/>
    <Benefit/>
    <SliderPage/>
    </>
  )
}

export default HomePage
