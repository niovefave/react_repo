import { createContext, useContext, useReducer } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'plus':
        return {
          ...state,
          num: state.num + 1,
        };
      case 'minus':
        return {
          ...state,
          num: state.num - 1,
        };
      default:
        return initialState;
    }
  };
  const initialState = { num: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContext, MyContextProvider, useMyContext };
