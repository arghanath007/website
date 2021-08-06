import React from "react";

import "./CheckOutItem.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../Redux/Cart/CartActions";

const CheckOutItem = ({
  cartItem,
  clearItem,
  addItemToCart,
  removeItemFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkOutItem">
      <div className="imageContainer">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItemFromCart(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div onClick={() => clearItem(cartItem)} className="removeButton">
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
