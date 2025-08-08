import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import BoardInsert from '../pages/board/BoardInsert';
import BoardList from '../pages/board/BoardList';
import NoticeInsert from '../pages/notice/NoticeInsert';
import NoticeList from '../pages/notice/NoticeList';
import BoardIndex from '../pages/board/BoardIndex';
import NoticeIndex from '../pages/notice/NoticeIndex';

const LayoutDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8de;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr 150px;
  place-items: center center;
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <h2>HEADER</h2>
      <main>
        <Routes>
          <Route path="board" element={<BoardIndex />}>
            <Route path="insert" element={<BoardInsert />} />
            <Route path="list" element={<BoardList />} />
          </Route>
          <Route path="notice" element={<NoticeIndex />}>
            <Route path="insert" element={<NoticeInsert />} />
            <Route path="list" element={<NoticeList />} />
          </Route>
        </Routes>
      </main>
      <h2>FOOTER</h2>
    </LayoutDiv>
  );
};

export default MainLayout;
