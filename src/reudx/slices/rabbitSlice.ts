import { createSlice } from "@reduxjs/toolkit";
import rabbitData from "../../data/rabbit_data.json";

const initialState = rabbitData;

const rabbitSlice = createSlice({
  name: "rabbits",
  initialState,
  reducers: {},
});

export default rabbitSlice.reducer;
