import React from "react";
import "./Products.css";
import heart from "../../images/heart.png";
import plus from "../../images/plus-button.png";

function Products(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.img1} className="beforeimage" />
        <img src={heart} alt="" className="heart" />
        <div className="inner">
          <img src={props.img2} className="afterimage" />
        </div>
      </div>
      <div className="product-details">
        <div className="title">
          <span className="product-title">{props.name}</span>
          <img src={plus} className="plus" />
        </div>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
}

export default Products;
