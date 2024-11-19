import { createSlice } from "@reduxjs/toolkit";
import turtleData from "../../data/turtle_data.json";

const initialState = turtleData;

const turtleSlice = createSlice({
  name: "turtles",
  initialState,
  reducers: {},
});

export default turtleSlice.reducer;
