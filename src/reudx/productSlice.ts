import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/product_data.json";

const initialState = productData;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
