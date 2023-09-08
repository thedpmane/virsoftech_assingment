const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { crypto, quantity } = action.payload;
      const existingItem = state.find((item) => item.crypto.id === crypto.id);

      if (existingItem) {
        return state.map((item) =>
          item.crypto.id === crypto.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...state, { crypto, quantity }];
      }

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => item.crypto.id !== action.payload.crypto.id
      );

    default:
      return state;
  }
};

export default cartReducer;
