import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
import ProductDetail from './Screen/ProductDetail';
import About from './Screen/About';
import Products from './Screen/Products';
import Home from './Screen/Home';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App
