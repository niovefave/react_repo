import { createSlice } from '@reduxjs/toolkit';

const initialState = { cnt: 0 };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plusOne: (state, action) => {
      state.cnt = state.cnt + 1;
    },
    minusOne: (state, action) => {
      state.cnt = state.cnt - 1;
    },
    plus: (state, action) => {
      state.cnt = state.cnt + action.payload;
    },
    minus: (state, action) => {
      state.cnt = state.cnt - action.payload;
    },
  },
});

export const { plus, minus, plusOne, minusOne } = counterSlice.actions;
export default counterSlice.reducer;
