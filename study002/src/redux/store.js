import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import boardReducer from './board/boardSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: boardReducer,
  },
});

export default store;
