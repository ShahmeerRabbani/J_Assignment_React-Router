import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
import Dashboard from './Screen/Dashboard';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
