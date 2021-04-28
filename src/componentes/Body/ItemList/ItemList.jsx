import React, { Fragment } from "react";
import Items from "../Items/Items";
import "./ItemList.css";
import { Link } from 'react-router-dom';

const ItemList = ({ data }) => {

  return (
    <Fragment>
      <Link to="/category" className='back-arrow'>
        <i class="fas fa-arrow-left"> <span> Back to categories</span></i>
      </Link>
      <div className="itemList">
        {data.map((data) => {
          return (
            <Items
              key={data.id}
              title={data.title}
              price={data.price}
              img={data.image}
              description={data.description}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default ItemList;
