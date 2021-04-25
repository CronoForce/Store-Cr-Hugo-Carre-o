import React, { useState, useEffect, Fragment } from "react";
import ItemList from "../../Body/ItemList/ItemList";
import './MenClothing.css'

const MenClothing = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    const itemProduct = await data.json();
    setProduct(itemProduct);
  };

  return (
    <Fragment>
      <div className="menClothing">
        <h2>Men's Clothing</h2>
      </div>
      <ItemList data={product} />
    </Fragment>
  );
};

export default MenClothing;
