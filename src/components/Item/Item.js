import React, { Fragment, useState } from "react";
import "./Item.css";
import ItemCount from '../ItemCount/ItemCount';
import ItemDescription from '../ItemDescription/ItemDescription';

const Item = ({ title, price, img }) => {

  const [active, setAtive] = useState(false);

  const toggle = () => {
    setAtive(!active);
  };

  return (
    <Fragment>
      <a className="item">
        <div className="item-content">
          <div className="item-content-img">
            <img src={img} className="" />
          </div>
          <div className="item-content-text">
            <a onClick={toggle}><p className="precio-item">$USD {price}</p><p className="comprar-item">Comprar</p></a>
            <span>{title}</span>
          </div>
        </div>
      </a>
      <ItemDescription active={active} toggle={toggle}>
        <div className="description-item">
           <div className="item-img">
              <img src='https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'/>
           </div> 
           <div className="item-text">
              <span>BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</span>
              <span>$USD 56.99</span>
              <span>Envio Gratis <i class="fas fa-truck"></i></span>
              <button className="btn-buy">Comprar</button>
              <ItemCount/>
           </div>
        </div>
      </ItemDescription>
    </Fragment>
  );
};

export default Item;
