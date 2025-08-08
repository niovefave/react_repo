import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  background-color: #faffb244;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
`;

const BoardIndex = () => {
  return (
    <>
      <h1>BOARD_INDEX</h1>
      <LayoutDiv>
        <nav>
          <Link to={'/main/board/insert'}>INSERT</Link>
          <br />
          <Link to={'/main/board/list'}>LIST</Link>
        </nav>
      </LayoutDiv>
      <Outlet />
    </>
  );
};

export default BoardIndex;
