import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: lightgray;
`;

const MyBtn = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default MyBtn;
