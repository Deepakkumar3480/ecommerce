import React, { useState } from "react";
import "./shop.css";
import { category } from "../../Category";
import { dummydata } from "../../dummydata";
import Product from "../product/Product";
import { FaShopify } from "react-icons/fa";

const Shop = () => {
     let [cate, setCate] = useState(dummydata);
      function filterProducts(Category) {
        if(Category ==='All'){
            setCate(dummydata)
            return;
        }
        const updatedata = dummydata.filter((item) => (item.category === Category));
        setCate(updatedata);
        console.log(cate)
      }
  return (
    <div className="shop">
        <div className="head">
            <span>Shop</span>
            <FaShopify/>
        </div>
      <div className="category-section">
        {category.map((item, index) => (
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
      <div className="product-section">
        {cate.map((item) => (
          <Product name={item.name} price={item.price} image={item.image} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
