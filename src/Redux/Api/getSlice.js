import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postApi = createAsyncThunk("posts/postApi", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [postApi.pending]: (state, action) => {
      state.loading = true;
    },
    [postApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [postApi.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});


export default postSlice.reducer;
