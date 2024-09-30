import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header.jsx'
import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <App />
    <Footer/>
  </BrowserRouter>
  </StrictMode>,
)
