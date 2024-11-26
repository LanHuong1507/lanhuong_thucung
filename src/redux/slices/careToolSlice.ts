import { createSlice } from "@reduxjs/toolkit";
import careToolData from "../../data/dungcuchamsoc_data.json";

const initialState = careToolData;

const careToolSlice = createSlice({
  name: "careTools",
  initialState,
  reducers: {},
});

export default careToolSlice.reducer;
