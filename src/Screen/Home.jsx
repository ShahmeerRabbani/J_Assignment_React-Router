import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { RiDoubleQuotesR } from "react-icons/ri";
import Products from "./Products";

const Home = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("SignUp");
    navigate("/");
  };

  return (
    <div className="Dashboard">
      <div className="bg-overlay">
        <Navbar />
        <div className="text_box">
          <span>Summer Collection</span>
          <span>Introducing <br></br>New Arrivals</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </span>
          <button>View Collection</button>
        </div>
      </div>

      <div className="cheaper">
        <span><RiDoubleQuotesR size={58}/></span>
        <span>Shopping is cheaper than therapy.</span>
        <span>______________OnlineWardrobe</span>
      </div>

      <div className="divider"></div>

      <div className="Product_preview">
        <h1 style={{textAlign: 'center'}}>Featured Products</h1>
        <Products/>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
