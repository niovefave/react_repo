import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from '../redux/counter/counterSlice';

const Counter = () => {
  const cnt = useSelector((state) => state.Counter.cnt);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter</h2>
      <h3>CNT : {cnt}</h3>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        minus
      </button>
    </>
  );
};

export default Counter;
