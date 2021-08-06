import CartTypes from "./CartTypes";

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CartTypes.ADD_ITEM,
  payload: item,
});
