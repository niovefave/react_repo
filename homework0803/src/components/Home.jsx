import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import BoardInsert from './board/BoardInsert';
import BoardList from './board/BoardList';
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 860px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.4px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const NavItem = styled(NavLink)`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  text-decoration: none;
  color: #111827;
  font-weight: 600;

  &:hover {
    background: #f3f4f6;
  }
  &.active {
    background: #111827;
    color: #fff;
    border-color: #111827;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.12);
  }
`;

const Content = styled.div`
  margin-top: 12px;
`;

const Home = () => {
  return (
    <Wrap>
      <HomeLink to="/">
        <Title>HOME</Title>
      </HomeLink>
      <Nav>
        <NavItem to="/insert">게시글 작성</NavItem>
        <NavItem to="/list">게시글 조회</NavItem>
      </Nav>
      <Content>
        <Routes>
          <Route path="/insert" element={<BoardInsert />}></Route>
          <Route path="/list" element={<BoardList />}></Route>
        </Routes>
      </Content>
    </Wrap>
  );
};

export default Home;
