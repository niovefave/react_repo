import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  background-color: #faffb244;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
`;

const NoticeIndex = () => {
  return (
    <>
      <h1>NOTICE_INDEX</h1>
      <LayoutDiv>
        <nav>
          <Link to={'/main/notice/insert'}>INSERT</Link>
          <br />
          <Link to={'/main/notice/list'}>LIST</Link>
        </nav>
      </LayoutDiv>
      <Outlet />
    </>
  );
};

export default NoticeIndex;
