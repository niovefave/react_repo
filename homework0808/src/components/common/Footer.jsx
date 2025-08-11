import { styled } from '@mui/material';
import React from 'react';
const StyledFooter = styled('footer')`
  width: 100vw;
  height: 100px;
  background: white;
  border-top: 2px solid #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 14px;

  &::before {
    content: '© 2025 Semion System';
  }
`;
const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;
