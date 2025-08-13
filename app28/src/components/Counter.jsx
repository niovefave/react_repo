import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, minusOne, plus, plusOne } from '../redux/counterSlice';
const Counter = () => {
  const cnt = useSelector((obj) => obj.counter.cnt);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Counter</h2>
      <h4>CNT : {cnt}</h4>
      <input
        type="number"
        name="number"
        onChange={(evt) => {
          setNum(+evt.target.value);
        }}
      />
      <br />
      <button onClick={() => dispatch(plusOne())}>PLUS</button>
      <button onClick={() => dispatch(minusOne())}>MINUS</button>
      <br />
      <button onClick={() => dispatch(plus(num))}>PLUS : </button>
      <br />
      <button onClick={() => dispatch(minus(num))}>MINUS : </button>
      <br />
    </>
  );
};

export default Counter;
