import React from "react";
import styles from "./Footer.module.css";
import LogoImg from "../../assets/logo.png";

const Footer = ({isHome}) => {
  return (
    <>
    <div className={styles.Footer} style={{display: isHome ? 'none' : ''}}>
      <div className={styles.logo_side}>
        <span>
          <img src={LogoImg} alt="" />
        </span>
        <p>
          Transform your style with OnlineWardrobe - where fashion meets
          elegance. Discover the latest trends and timeless classics to elevate
          your wardrobe every day.
        </p>
      </div>
      <ul>
        <li>Quick Links</li>
        <li>Home</li>
        <li>All Products</li>
        <li>About Us</li>
      </ul>
      <ul>
        <li>Shop Collections</li>
        <li>Men's Jeans</li>
        <li>Women's Tops</li>
        <li>Hoodies</li>
        <li>Jackets</li>
        <li>Shoes</li>

      </ul>
      <ul>
        <li>Shop Collections</li>
        <li>Men's Jeans</li>
        <li>Women's Tops</li>
        <li>Hoodies</li>
        <li>Jackets</li>
        <li>Shoes</li>

      </ul>
      <ul>
        <li>Shop Collections</li>
        <li>Men's Jeans</li>
        <li>Women's Tops</li>
        <li>Hoodies</li>
        <li>Jackets</li>
        <li>Shoes</li>

      </ul>
    </div>
    <div className={styles.copyWrite} style={{display: isHome ? 'none' : ''}}>
        <span>Copyright © 2024 OnlineWardrobe</span>
        <span>Developed by <a href="https://github.com/shahmeerRabbani">Shahmeer Rabbani</a></span>
    </div>
    </>

  );
};

export default Footer;
