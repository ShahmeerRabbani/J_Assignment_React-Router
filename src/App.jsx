import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
import Dashboard from './Screen/Dashboard';
import Home from './Screen/Home';
import ProductDetail from './Screen/ProductDetail';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path='home' element={<Home />}/>
        <Route path='product/:id' element={<ProductDetail />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
