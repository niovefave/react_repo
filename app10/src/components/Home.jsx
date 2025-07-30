import React from 'react';
import Hello from './Hello';
import World from './World';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>HOME</h2>
      <hr />

      <Routes>
        <Route path="/hello" element={<Hello />}></Route>
        <Route path="/world" element={<World />}></Route>
        <Route path="*" element={<h2>NOT FOUND</h2>}></Route>
      </Routes>
    </>
  );
};

export default Home;
