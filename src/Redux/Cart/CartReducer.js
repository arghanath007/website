import CartTypes from "./CartTypes";
import { addItems } from "./CartUtilities";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItems(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
