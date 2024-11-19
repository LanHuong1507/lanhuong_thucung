import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import blogReducer from "./slices/blogSlice";
import dogReducer from "./slices/dogSlice";
import catReducer from "./slices/catSlice";
import birdReducer from "./slices/birdSlice";
import rabbitReducer from "./slices/rabbitSlice";
import turtleReducer from "./slices/turtleSlice";
import fishReducer from "./slices/fishSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    blogs: blogReducer,
    dogs: dogReducer,
    cats: catReducer,
    birds: birdReducer,
    rabbits: rabbitReducer,
    turtles: turtleReducer,
    fish: fishReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
