import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: { voList: [] },
  reducers: {
    setVoList: (state, action) => {
      state.voList = action.payload;
    },
  },
});

export const { setVoList } = boardSlice.actions;
export default boardSlice.reducer;
