import React from 'react';
import Notice from './Notice';
import Board from './Board';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <a href="/">
        <h2>HOME</h2>
      </a>
      <a href="/board">board</a>
      <span> / </span>
      <a href="/notice">notice</a>
      <Routes>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="*" element={<h3>하나 고르쇼</h3>}></Route>
      </Routes>
    </>
  );
};

export default Home;
