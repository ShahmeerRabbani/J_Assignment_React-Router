import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards/Cards";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import MultipleSelect from "../Components/Select/SelectFile";

const Products = () => {
  const [listitem, setListItem] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const fetchData = await axios.get("https://fakestoreapi.com/products");
    setListItem(fetchData.data);
  };

  return (
      <div className="Pro_card_parent">
        <Navbar />
        <div className="Product_Container">
          <div className="selection">
            <h1 style={{fontSize: '52px'}}>All Products</h1>
            <MultipleSelect/>
          </div>
          <div className="pro_wrapper">

        {listitem.map((e, i) => {
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
          );
        })}
        </div>
        </div>
        <Footer/>
      </div>
  );
};

export default Products;
