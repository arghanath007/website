import React from "react";

import "./CheckOutItem.scss";

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkOutItem">
    <div className="imageContainer">
      <img src={imageUrl} alt="Item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price"> {price}</span>
    <div className="removeButton">&#10006;</div>
  </div>
);

export default CheckOutItem;
