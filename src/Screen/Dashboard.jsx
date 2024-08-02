import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('SignUp');
    navigate('/')
  }

  return (
    <div className='Dashboard'>
      <div className="sidebar">
        <ul>
          <li className='active'>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Settings</li>
          <li style={{textDecoration: 'underline', color: 'blue'}} onClick={handleLogOut}>Log out</li>
        </ul>
      </div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
