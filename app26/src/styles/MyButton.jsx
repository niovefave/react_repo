import { Button, styled } from '@mui/material';
import React from 'react';
const StyledButton = styled(Button)((props) => {
  return {
    backgroundColor: props.c,
    color: 'white',
  };
});

const MyButton = ({ children }) => {
  return (
    <>
      <StyledButton c="red" size="large">
        {children}
      </StyledButton>
      <StyledButton size="small">{children}</StyledButton>
    </>
  );
};

export default MyButton;
