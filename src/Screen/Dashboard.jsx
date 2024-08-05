import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from './Home';
import ProductDetail from './ProductDetail';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('SignUp');
    navigate('/')
  }

  return (
    <div className='Dashboard'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
