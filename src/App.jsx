import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Curd from './products/Curd'
import ShoppingCart from './products/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/curd" element={<Curd />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App
