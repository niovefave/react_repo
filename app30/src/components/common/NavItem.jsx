import { styled } from '@mui/material/styles';
import React from 'react';
const StyledDiv = styled('div')`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    ${(props) => {
      return props.isSelected ? 'border-bottom: 3px solid gray;' : '';
    }}
    text-decoration: none;
    color: inherit;
    font-size: 2em;
    font-weight: bold;
  }
`;

const NavItem = ({ children, isSelected }) => {
  return <StyledDiv isSelected={isSelected}>{children}</StyledDiv>;
};

export default NavItem;
