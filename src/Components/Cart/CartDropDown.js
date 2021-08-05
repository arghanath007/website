import React from "react";

import CustomButton from "../Button/CustomButton";
import "./CartDropDown.scss";

const CartDropDown = () => (
  <div className="cartDropDown">
    <div className="cartItems" />
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

export default CartDropDown;
