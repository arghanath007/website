import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartActions";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />
    <span className="itemCount">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
