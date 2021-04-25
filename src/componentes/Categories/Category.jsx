import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="category">
      <h2>Categories</h2>
      <div className="category-content">
        <a href="/electronics">
          <div className="category-items">
            <img
              src="https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg"
              alt=""
            />
            <p>Electronics</p>
          </div>
        </a>
        <a href="/jewelery">
          <div className="category-items">
            <img
              src="https://cdn.pixabay.com/photo/2018/09/29/00/09/jewel-3710537_1280.jpg"
              alt=""
            />
            <p>Jewelery</p>
          </div>
        </a>
        <a href="/mensclothing">
          <div className="category-items">
            <img
              src="https://cdn.pixabay.com/photo/2016/02/19/10/56/hip-hop-1209499_1280.jpg"
              alt=""
            />
            <p>Men's Clothing</p>
          </div>
        </a>
        <a href="/womensclothing">
          <div className="category-items">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg"
              alt=""
            />
            <p>Women's Clothing</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Category;
