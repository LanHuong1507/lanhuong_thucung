import { createSlice } from "@reduxjs/toolkit";
import blogData from "../../data/blog_data.json";

const initialState = blogData;

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
});

export default blogSlice.reducer;
