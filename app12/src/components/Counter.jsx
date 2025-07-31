import React, { useContext, useState } from 'react';
import { MyContext, useMyContext } from '../context/CountContext';

const Counter = () => {
  const { state, dispatch } = useMyContext();

  return (
    <>
      <h1>COUNTER</h1>
      <h3>NUM : {state}</h3>
      <button
        onClick={() => {
          dispatch({ type: 'plus' });
        }}
      >
        PLUS
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'minus' });
        }}
      >
        MINUS
      </button>
    </>
  );
};

export default Counter;
