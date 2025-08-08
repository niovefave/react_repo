import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 150px;
  border: 1px solid black;
  background-color: #fc45d4;
  border-radius: 10px;
  font-size: 40px;
  font-weight: 700;
  color: white;
`;

const AwesomeBtn = ({ str }, { f }) => {
  return <StyledButton onClick={f}>{str}</StyledButton>;
};

export default AwesomeBtn;
