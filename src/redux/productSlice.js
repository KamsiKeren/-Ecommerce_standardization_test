import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartItems: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProducts: (state, action) => {
      state.products = action.payload;
    },
    addtoCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export default productSlice.reducer;
export const { addtoCart, saveProducts } = productSlice.actions;
