import React from "react";
import "./ItemCount.css";

function ItemCount() {
  var cant = 0;
  const Add_Prodcut = () => {
    var text_cant = document.querySelector("#car-cant");
    cant = cant + 1;

    text_cant.innerHTML = cant;
  };

  const Less_Product = () => {
    var text_cant = document.querySelector("#car-cant");
    cant = cant - 1;

    text_cant.innerHTML = cant
    
  };

  return (
    <div className="itemCount">
      <div className="itemCount-Container">
        <a onClick={Add_Prodcut} className="btn-car-add">
          +
        </a>
        <p className="car-cant" id="car-cant">
          0
        </p>
        <a onClick={Less_Product} className="btn-car-less">-</a>
      </div>
      <a href="" className="btn-add-car">
        Añadir al carrito
      </a>
    </div>
  );
}

export default ItemCount;
