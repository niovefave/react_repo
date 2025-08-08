import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const BoardIndex = () => {
  return (
    <>
      <h1>BOARD_INDEX</h1>
      <nav>
        <Link to={'/main/board/insert'}>INSERT</Link>
        <Link to={'/main/board/list'}>LIST</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default BoardIndex;
