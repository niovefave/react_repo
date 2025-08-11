import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ children }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{ bgcolor: 'red', m: '100px', ':hover': { bgcolor: 'orange' } }}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
