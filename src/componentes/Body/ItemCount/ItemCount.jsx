import React, { useState } from 'react';
import "./ItemCount.css";
import { Link } from 'react-router-dom';

function ItemCount({onAdd}) {
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
        <button onClick={less} className="btn-car-add">
          -
        </button>
        <p className="car-cant" id="car-cant">
          {number}
        </p>
        <button onClick={add} className="btn-car-less">
          +
        </button>
      </div>
      <Link className="btn-add-car" onClick={() => onAdd(number)}>
        Añadir al carrito
      </Link>
    </div>
  );
}

export default ItemCount;
