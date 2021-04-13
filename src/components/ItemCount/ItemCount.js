import React from "react";
import "./ItemCount.css";

function ItemCount() {
    return (
    <div className="itemCount">
      <div className="itemCount-Container">
        <a className="btn-car-add">
          +
        </a>
        <p className="car-cant" id="car-cant">
          0
        </p>
        <a className="btn-car-less">-</a>
      </div>
      <a href="" className="btn-add-car">
        Añadir al carrito
      </a>
    </div>
  );
}

export default ItemCount;
