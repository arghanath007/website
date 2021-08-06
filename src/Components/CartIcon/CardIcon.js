import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/CartActions";
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";

import "./CartIcon.scss";

import { selectItemsCount } from "../../Redux/Cart/CartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />
    <span className="itemCount">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
