import { styled } from '@mui/material/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';

const StyledDiv = styled('div')`
  width: 80%;
  height: 80%;
  background-color: aliceblue;
  border: 2px solid black;
  border-radius: 5px;
  padding: 20px 30px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 150px 1fr;
  & > *:nth-child(odd) {
    place-self: center center;
    font-size: 24px;
    font-weight: 700;
  }
  & > *:nth-child(even) {
    place-self: center start;
  }
  & input {
    width: 300px;
    height: 35px;
    border-radius: 5px;
    font-size: 18px;
  }
`;

const MemberLayout = () => {
  return (
    <StyledDiv>
      <Outlet />
    </StyledDiv>
  );
};

export default MemberLayout;
