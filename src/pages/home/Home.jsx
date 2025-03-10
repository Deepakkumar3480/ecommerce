import React, { useState } from "react";
import { dummydata } from "../../dummydata";
import {category} from "../../Category"
// import Nav from '../../components/nav/Nav'
import bg from "../../assets/bg0.gif";
import "./home.css";
import Product from "../../components/product/Product";

const Home = () => {
  let [cate, setCate] = useState(dummydata);
  function filterProducts(Category) {
    const updatedata = dummydata.filter((item) => (item.category === Category));
    setCate(updatedata);
  }
  return (
    <div className="home">
      {/* <Nav/> */}
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
      <div className="category-section">
        {category.slice(0, 5).map((item, index) => (
          <div
            className="category-card"
            onClick={() => {
              filterProducts(item.name);
            }}
            key={index}
          >
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <h1>Trending products</h1>
      <div className="product-section">
        {cate.slice(0, 5).map((item) => (
          <Product name={item.name} price={item.price} image={item.image} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
