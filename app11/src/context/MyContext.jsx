import { createContext, useContext, useState } from 'react';

const StrContext = createContext();
const NumContext = createContext();

const StrContextProvider = ({ children }) => {
  const [str, setStr] = useState('STR state');
  return (
    <StrContext.Provider value={[str, setStr]}>{children}</StrContext.Provider>
  );
};

const NumContextProvider = ({ children }) => {
  const [num, setNum] = useState(1);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  const v = { num, plus, minus };
  return <NumContext.Provider value={v}>{children}</NumContext.Provider>;
};

const useStrContext = () => {
  return useContext(StrContext);
};

const useNumContext = () => {
  return useContext(NumContext);
};

export { StrContextProvider, NumContextProvider, useStrContext, useNumContext };
