import React from "react";
import { Link, Routes,Route } from "react-router-dom";


const Product = () => {
  return (
    <div>
      <h1>Hii</h1>
      <Link to="/product/men">Men</Link>
      <Link to="/product/women">Women </Link>
      <Link to="/product/kid">Kids</Link>

   
        
    </div>
  );
};

export default Product;
