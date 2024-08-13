import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TrendImg from "../assets/about-img1.png";
import FashionImg from "../assets/about-img2.png";
import AboutCard from "../Components/About_card/AboutCard";
import AboutImg1 from '../assets/aboutCard1.jpg'
import AboutImg2 from '../assets/aboutCard2.jpg'
import AboutImg3 from '../assets/aboutCard3.jpg'
import AboutImg4 from '../assets/aboutCard4.jpg'
import AboutImg5 from '../assets/aboutCard5.jpg'
import AboutImg6 from '../assets/aboutCard6.jpg'
import { RiTruckLine } from "react-icons/ri";
import { PiMapPinLineBold } from "react-icons/pi";
import { BsTags } from "react-icons/bs";
import Footer from '../Components/Footer/Footer'

const About = () => {
  return (
    <div className="About_us">
      <div className="About_header">
        <div className="bg-overlay">
          <Navbar />
        </div>
      </div>
      <div className="container">
        <div className="trend_fashion">
          <div className="trend-img">
            <img src={TrendImg} alt="" />
          </div>
          <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
            <span style={{ fontSize: "30px", fontWeight: 400 }}>
              Latest Trends For All
            </span>
            <span style={{ fontSize: "17px", lineHeight: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </span>
          </div>
        </div>
        <div className="trend_fashion">
          <div className="trend-img">
            <img src={FashionImg} alt="" />
          </div>
          <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
            <span style={{ fontSize: "30px", fontWeight: 400 }}>
              Sale on latest fashion
            </span>
            <span style={{ fontSize: "17px", lineHeight: "24px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </span>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="love_us">
        <p>They Love Us!!!</p>
        <span style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
        <div style={{padding: '40px 0', display: 'flex', gap: 20, flexWrap: 'wrap'}}>
        <AboutCard img={AboutImg1} heading='Stella Jones' para='Super Model'/>
        <AboutCard img={AboutImg2} heading='Carlos Hughes' para='Student'/>
        <AboutCard img={AboutImg3} heading='Mark Adams' para='Entrepreneur'/>
        <AboutCard img={AboutImg4} heading='James Hobbs' para='Businessman'/>
        <AboutCard img={AboutImg5} heading='Chloe Newts' para='Student'/>
        <AboutCard img={AboutImg6} heading='Brianna Stark' para='Fashion Designer'/>
        </div>
        <div className="transport">
          <div className="transp_div">
            <span><RiTruckLine size={40}/></span>
            <h2>Express Delivery</h2>
          </div>
          <div className="transp_div">
            <span><PiMapPinLineBold size={40}/></span>
            <h2>Order Tracking</h2>
          </div>
          <div className="transp_div">
            <span><BsTags size={40}/></span>
            <h2>Regular Discounts</h2>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default About;
