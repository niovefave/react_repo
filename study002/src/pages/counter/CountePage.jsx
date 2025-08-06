import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus, minus, reset } from '../../redux/counter/counterSlice';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const CountePage = () => {
  const cnt = useSelector((state) => state.counter.cnt);
  const dispatch = useDispatch();

  return (
    <Div>
      <h2>CNT : {cnt}</h2>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        PLUS
      </button>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        MINUS
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        RESET
      </button>
    </Div>
  );
};

export default CountePage;
