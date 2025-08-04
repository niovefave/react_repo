import { combineReducers, createStore } from 'redux';

const initialState = { cnt: 0 };
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return { ...state, cnt: state.cnt + 1 };
    case 'minus':
      return { ...state, cnt: state.cnt - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  c: counterReducer,
});

const rootStore = createStore(rootReducer);

export default rootStore;
