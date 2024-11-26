import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import dogReducer from "./slices/dogSlice";
import catReducer from "./slices/catSlice";
import rabbitReducer from "./slices/rabbitSlice";
import fishReducer from "./slices/fishSlice";
import careToolReducer from "./slices/careToolSlice";
import foodNutritionReducer from "./slices/foodNutritionSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    dogs: dogReducer,
    cats: catReducer,
    rabbits: rabbitReducer,
    fish: fishReducer,
    careTools: careToolReducer,
    foodNutrition: foodNutritionReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
