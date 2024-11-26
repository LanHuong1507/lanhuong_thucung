import { createSlice } from "@reduxjs/toolkit";
import foodNutritionData from "../../data/thucan_data.json";
const initialState = foodNutritionData;

const foodNutritionSlice = createSlice({
  name: "foodNutrition",
  initialState,
  reducers: {},
});

export default foodNutritionSlice.reducer;
