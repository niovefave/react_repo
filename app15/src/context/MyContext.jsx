import { createContext, useContext, useReducer, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = (props) => {
  const initialState = { cnt: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'plusOne':
        return { ...state, cnt: state.cnt + 1 };
      case 'minusOne':
        return { ...state, cnt: state.cnt - 1 };
      case 'plus':
        return { ...state, cnt: state.cnt + action.data };
      case 'minus':
        return { ...state, cnt: state.cnt - action.data };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContextProvider, useMyContext };
