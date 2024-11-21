import { createSlice } from "@reduxjs/toolkit";
import birdData from "../../data/bird_data.json";

const initialState = birdData;

const birdSlice = createSlice({
  name: "birds",
  initialState,
  reducers: {},
});

export default birdSlice.reducer;
