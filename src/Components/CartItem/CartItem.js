import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt="Item" />
    <div className="itemDetails">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} * ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
