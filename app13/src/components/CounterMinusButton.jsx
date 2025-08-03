import React from 'react';
import styled from 'styled-components';

const AwesomeBtn = styled.button`
  background-color: yellow;
  border: 1px solid black;
  border-radius: 3px;
  &:hover {
    background-color: #cece00;
  }
`;

const CounterMinusButton = ({ num, setNum }) => {
  return (
    <>
      <AwesomeBtn
        onClick={() => {
          setNum(num - 1);
        }}
      >
        minus
      </AwesomeBtn>
    </>
  );
};

export default CounterMinusButton;
