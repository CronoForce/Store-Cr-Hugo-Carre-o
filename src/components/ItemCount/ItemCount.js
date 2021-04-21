import React, { useState } from 'react';
import "./ItemCount.css";

function ItemCount() {
  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1);
  };
  const less = () => {

    if(number === 1){
      setNumber(number);
    }else{
      setNumber(number - 1);
    }

    
  };

  return (
    <div className="itemCount">
      <div className="itemCount-Container">
        <button onClick={add} className="btn-car-add">
          +
        </button>
        <p className="car-cant" id="car-cant">
          {numero}
        </p>
        <button onClick={less} className="btn-car-less">
          -
        </button>
      </div>
      <button href="" className="btn-add-car">
        Añadir al carrito
      </button>
    </div>
  );
}

export default ItemCount;
