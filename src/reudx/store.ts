import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import blogReducer from "./slices/blogSlice";
import dogReducer from "./slices/dogSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    blogs: blogReducer,
    dogs: dogReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
