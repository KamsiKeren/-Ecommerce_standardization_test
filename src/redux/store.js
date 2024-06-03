import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import { productsApi } from "../services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
import { singleProductApi } from "../services/singleProduct";

export const store = configureStore({
  reducer: {
    products: productSlice,
    productsApi: productsApi.reducer,
    singleProductApi: singleProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
