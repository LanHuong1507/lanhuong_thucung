import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import dogReducer from "./slices/dogSlice";
import catReducer from "./slices/catSlice";
import rabbitReducer from "./slices/rabbitSlice";
import fishReducer from "./slices/fishSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    dogs: dogReducer,
    cats: catReducer,
    rabbits: rabbitReducer,
    fish: fishReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
