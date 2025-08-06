import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0 0;
  padding-bottom: 15px;
  border-bottom: solid black 1px;
  & > a {
    text-decoration: none;
    color: lightblue;
    font-size: large;
    font-weight: bolder;
  }
`;

const Header = () => {
  return (
    <>
      <Nav>
        <Link to={'/'}>HOME</Link>
        <Link to={'/counter'}>COUNTER</Link>
        <Link to={'/board/list'}>BOARD</Link>
        <Link to={'/notice/list'}>NOTICE</Link>
      </Nav>
    </>
  );
};

export default Header;
