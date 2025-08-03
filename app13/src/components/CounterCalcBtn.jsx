import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const AwesomeBtn = styled.button`
  background-color: ${({ bgc }) => bgc};
  border: 1px solid black;
  border-radius: 3px;
  &:hover {
    background-color: #cece00;
  }
`;

const CounterCalcBtn = ({ str, f, bgc }) => {
  return (
    <>
      <AwesomeBtn bgc={bgc || colors.red[400]} onClick={f}>
        {str}
      </AwesomeBtn>
    </>
  );
};

export default CounterCalcBtn;
