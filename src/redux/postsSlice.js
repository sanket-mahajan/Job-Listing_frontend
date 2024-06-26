import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BACKEND_URL from "../config";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(`${BACKEND_URL}/posts`);
  return response.data;
});

export const fetchPostsByQuery = createAsyncThunk(
  "posts/fetchPostsByQuery",
  async (query) => {
    const response = await axios.get(`${BACKEND_URL}/post/${query}`);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchPostsByQuery.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default postsSlice.reducer;
