import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { cnt: 0 },
  reducers: {
    plus: (state, action) => {
      state.cnt += 1;
    },
    minus: (state, action) => {
      state.cnt -= 1;
    },
  },
});

export const { plus, minus } = counterSlice.actions;
export default counterSlice.reducer;
