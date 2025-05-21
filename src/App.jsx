import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Product from './components/Product'
import Service from './components/Service'
import Nav from './components/Nav'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
         <Route path='/details' element={<ProductDetails/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    </div>
  )
}

export default App
