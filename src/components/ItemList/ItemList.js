import React, { Fragment } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ data }) => {
  return (
    <Fragment>
      <div className="title">
        <h3>Productos</h3>
      </div>
      <div className="itemList">
        {data.map((data) => {
          return (
            <Item
              key={data.id}
              title={data.title}
              price={data.price}
              img={data.image}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default ItemList;
