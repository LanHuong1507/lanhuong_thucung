import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import blogReducer from "./slices/blogSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    blogs: blogReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
