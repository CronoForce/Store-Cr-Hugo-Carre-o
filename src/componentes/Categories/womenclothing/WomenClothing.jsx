import React, { useState, useEffect, Fragment } from "react";
import ItemList from "../../Body/ItemList/ItemList";
import './WomenClothing.css'

const WomenClothing = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    const itemProduct = await data.json();
    setProduct(itemProduct);
  };

  return (
    <Fragment>
      <div className="womenClothing">
        <h2>Women's Clothing</h2>
      </div>
      <ItemList data={product} />
    </Fragment>
  );
};

export default WomenClothing;
