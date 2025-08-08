import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 150px;
  border: 1px solid black;
  background-color: orange;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  margin: 10px;
`;
const Button = ({ str, f }) => {
  return <StyledButton onClick={f}>{str}</StyledButton>;
};

export default Button;
