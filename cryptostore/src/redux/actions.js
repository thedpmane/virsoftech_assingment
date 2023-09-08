export const addToCart = (crypto, quantity) => ({
  type: "ADD_TO_CART",
  payload: { crypto, quantity },
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});
