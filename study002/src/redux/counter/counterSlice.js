import { createSlice } from '@reduxjs/toolkit';

const initialState = { cnt: 0 };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus: (state, action) => {
      state.cnt += 1;
    },
    minus: (state, action) => {
      state.cnt -= 1;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { plus, minus, reset } = counterSlice.actions;
export default counterSlice.reducer;
