import React, { useState, useEffect, Fragment } from "react";
import ItemList from "../../Body/ItemList/ItemList";
import './Electronics.css';

const Electronics = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const itemProduct = await data.json();
    setProduct(itemProduct);
  };

  return (
    <Fragment>
    <div className='electronics'>
        <h2>Electronics</h2>
    </div>
      <ItemList data={product} />
    </Fragment>
  );
};

export default Electronics;
