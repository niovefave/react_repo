import React from 'react';
import { styled } from '@mui/material';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Aside from '../components/common/Aside';
import { Route, Routes } from 'react-router-dom';
import BookInsert from '../components/book/BookInsert';
import BookList from '../components/book/BookList';

const LayoutDiv = styled('div')`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-auto-rows: 150px 1fr 100px;
  grid-template-columns: 1fr;
  place-items: center center;
`;

const MainDiv = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 1fr 100px;
  place-items: center center;
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <Header />
      <MainDiv>
        <Aside />
        <Routes>
          <Route path="book/insert" element={<BookInsert />} />
          <Route path="book/list" element={<BookList />} />
          <Route path="auth/member/mypage" element={<h1>MYPAGE</h1>} />
        </Routes>
        <Aside />
      </MainDiv>
      <Footer />
    </LayoutDiv>
  );
};

export default MainLayout;
