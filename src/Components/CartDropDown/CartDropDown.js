import React from "react";

import CustomButton from "../Button/CustomButton";
import "./CartDropDown.scss";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Redux/Cart/CartSelectors";

const CartDropDown = ({ cartItems }) => (
  <div className="cartDropDown">
    <div className="cartItems">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
