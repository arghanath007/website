import CartTypes from "./CartTypes";

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CartTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item,
});
