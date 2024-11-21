import { createSlice } from "@reduxjs/toolkit";
import dogData from "../../data/dog_data.json";

const initialState = dogData;

const dogSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
});

export default dogSlice.reducer;
