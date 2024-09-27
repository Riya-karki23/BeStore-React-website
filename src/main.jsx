import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header.jsx'
import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>,
)
