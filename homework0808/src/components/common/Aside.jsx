import React from 'react';
import { styled } from '@mui/material';

const StyledAside = styled('aside')`
  width: 100%;
  height: 100%;
  background: #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Aside = () => {
  return (
    <StyledAside>
      <h1>사이드바</h1>
    </StyledAside>
  );
};

export default Aside;
