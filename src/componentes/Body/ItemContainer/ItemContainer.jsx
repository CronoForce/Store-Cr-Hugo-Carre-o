import React, { useEffect, useState, Fragment } from "react";
import "./ItemContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch("https://fakestoreapi.com/products/");
    const itemProduct = await data.json();
    setProduct(itemProduct);
  };

  return (
    <Fragment>
      <div className="itemContainer">
        <h2>Hot Shopping</h2>
      </div>
      <ItemList data={product} />
    </Fragment>
  );
};

export default ItemContainer;
