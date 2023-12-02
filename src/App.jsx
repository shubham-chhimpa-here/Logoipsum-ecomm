import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Newsletter from './components/NewsLetter'
import Products from './pages/Products'
import AllRoutes from './components/AllRoutes'

function App() {

  return (
    <>
    <Navbar />
    <AllRoutes />
    <Newsletter />
    <Footer />
    </>
  )
}

export default App
