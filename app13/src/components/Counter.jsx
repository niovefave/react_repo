import React, { useContext, useState } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterCalcBtn from './CounterCalcBtn';
import { useMyContext } from '../context/MyContext';

const Counter = () => {
  const { state, dispatch } = useMyContext();

  return (
    <>
      <h2>Counter</h2>
      <CounterDisplay x={state.num} />
      <CounterCalcBtn
        bgc={'pink'}
        str="plus"
        f={() => {
          dispatch({ type: 'plus' });
        }}
      />
      <CounterCalcBtn
        bgc={'blue'}
        str="minus"
        f={() => {
          dispatch({ type: 'minus' });
        }}
      />
    </>
  );
};

export default Counter;
