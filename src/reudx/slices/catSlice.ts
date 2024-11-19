import { createSlice } from "@reduxjs/toolkit";
import catData from "../../data/cat_data.json";
const initialState = catData;

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
});

export default catSlice.reducer;
