import React from 'react'
import styles from './Navbar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/logo.png'
import { MdShoppingCart } from 'react-icons/md';

const Navbar = ({isHome}) => {
  
  const LinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.3rem',
    fontWeight: 400,

  }

  return (
    <div className={styles.Navbar} style={{display: isHome ? 'none' : ''}}>
      <div className={styles.logo_img}>
        <img src={LogoImg} alt="" />
      </div>
      <ul>
        <li><NavLink style={LinkStyle} to='/home'>Home</NavLink></li>
        <li><NavLink style={LinkStyle} to='/products'>All Products</NavLink></li>
        <li><NavLink style={LinkStyle} to='/about'>About us</NavLink></li>
      </ul>
      <span>
        <MdShoppingCart size={35} color='#fff'/>
      </span>
    </div>
  )
}

export default Navbar;
