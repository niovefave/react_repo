import { createSlice } from '@reduxjs/toolkit';

const initialState = { post: [] };
const boardSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.post.push(action.payload);
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { addPost, setPost } = boardSlice.actions;
export default boardSlice.reducer;
