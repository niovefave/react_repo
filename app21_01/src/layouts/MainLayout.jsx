import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardIndex from '../pages/board/BoardIndex';
import BoardInsert from '../pages/board/BoardInsert';
import BoardList from '../pages/board/BoardList';
import NoticeInsert from '../pages/notice/NoticeInsert';
import NoticeList from '../pages/notice/NoticeList';
import NoticeIndex from '../pages/notice/NoticeIndex';

const MainLayout = () => {
  return (
    <>
      <h1>HEADER</h1>
      <main>
        <Routes>
          <Route path="board/*" element={<BoardIndex />}>
            <Route path="insert" element={<BoardInsert />} />
            <Route path="list" element={<BoardList />} />
          </Route>
          <Route path="notice/*" element={<NoticeIndex />}>
            <Route path="insert" element={<NoticeInsert />} />
            <Route path="list" element={<NoticeList />} />
          </Route>
        </Routes>
      </main>
      <h1>FOOTER</h1>
    </>
  );
};

export default MainLayout;
