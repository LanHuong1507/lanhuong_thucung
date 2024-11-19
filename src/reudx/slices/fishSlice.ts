import { createSlice } from "@reduxjs/toolkit";
import fishData from "../../data/fish_data.json";

const initialState = fishData;

const fishSlice = createSlice({
  name: "fishes",
  initialState,
  reducers: {},
});

export default fishSlice.reducer;
