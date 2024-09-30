
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/termsOfUse' element={<TermsOfUse/>}/>
    </Routes>
   </>
  )
}

export default App
