import React from "react";
import "./CartBuy.css";
import ItemCount from '../Body/ItemCount/ItemCount';

const CartBuy = (props) => {
  return (
    <div className="cartBuy">
      <div className="cartBuy-content">
        <h2>Shopping Cart</h2>
      </div>
      <div className="cartBuy-content-items">
      <h2>{props.cantidadPasada}</h2>
      </div>
    </div>
  );
};

export default CartBuy;
