import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice02';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
