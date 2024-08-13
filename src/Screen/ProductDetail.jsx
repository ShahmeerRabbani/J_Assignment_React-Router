import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import { ProductData } from "../Components/ProductData/ProductData";
import Cards from "../Components/Cards/Cards";
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import axios from "axios";

const ProductDetail = () => {

  const location = useLocation();
  const [listitem, setListItem] = useState([]);
  
  const filterCategory = listitem.filter((e, i)=>{
    return e.category === location.state
  })


  useEffect(()=>{
    getApi()
  }, [])

  const getApi = async () => {
    const fetchData = await axios.get("https://fakestoreapi.com/products");
    setListItem(fetchData.data);
  };

  const { id } = useParams();
  
  const filterData = listitem.filter((e, i) => {
    return e.id == id;
  });


  const displayNone = {
    display: 'none'
  }
  return (
    <div className="Pro_card_parent">
      <Navbar />
    <div className="Product_Container">
      <div style={{marginBottom: 30}}>
      <h1>Product Detail</h1>
      </div>
      {filterData.map((e, i) => {
        return (
          <div style={{display: 'flex', marginBottom: 60}} key={i}>
          <div className="Detail_img">
            <img src={e.image } alt="" />
          </div>
          <div className="Detail_Context">
            <p>Home/{e.category}/{e.title}</p>
            <h1 style={{color: 'red'}}>${e.price}</h1>
            <span style={{fontSize: 18, lineHeight: 1.5}}>{e.description}</span>
            <hr />
            <span>Category: {e.category}</span>
          </div>
          </div>
          // <Cards
          //   key={i}
          //   id={e.id}
          //   title={e.title}
          //   desc={e.description}
          //   price={e.price}
          //   img={e.image}
          //   rating={e.rating}
          //   display={displayNone}
          // />
        );
      })}

      <div className="divider"></div>
      <div className="related_product">
        <h1>Related Products</h1>
        <div style={{display: 'flex', marginTop: '60px'}}>
          {filterCategory.map((e, i)=>{
            return (
              <Cards
              key={i}
              id={e.id}
              title={e.title}
              desc={e.description}
              price={e.price}
              img={e.image}
              rating={e.rating}
              category={e.category}
              />
            )
          })}
        </div>
      </div>
    </div>

    <Footer/>
    </div>
  );
};

export default ProductDetail;
