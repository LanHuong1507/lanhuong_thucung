import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;