import React, { Fragment, useState } from "react";
import "./Items.css";
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDatail/ItemDetail';

const Item = ({ title, price, img, description}) => {

  const [active, setAtive] = useState(false);

  const toggle = () => {
    setAtive(!active);
  };

  return (
    <Fragment>
      <a className="item" onClick={toggle}>
        <div className="item-content">
          <div className="item-content-img">
            <img src={img} className="" alt=''/>
          </div>
          <div className="item-content-text">
            <a onClick={toggle}><p className="precio-item">$USD {price}</p><p className="comprar-item">Comprar</p></a>
            <span>{title}</span>
          </div>
        </div>
      </a>
      <ItemDetail active={active} toggle={toggle}>
        <div className="description-item">
           <div className="item-img">
              <img src={img} alt=''/>
           </div> 
           <div className="item-text">
              <span>{title}</span>
              <span>{description}</span>
              <span>${price}</span>
              <span>Free Shipping <i class="fas fa-truck"></i></span>
              <button className="btn-buy">Comprar</button>
              <ItemCount/>
           </div>
        </div>
      </ItemDetail>
    </Fragment>
  );
};

export default Item;