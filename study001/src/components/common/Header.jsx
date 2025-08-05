import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: lightblue;
  margin: 25px 0 0;
  background-color: lightgray;
  height: 50px;
  & > a {
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <>
      <Nav>
        <Link to={'/board/list'}>BOARD</Link>
        <Link to={'/notice/list'}>NOTICE</Link>
        <Link to={'/gallery/list'}>GALLERY</Link>
      </Nav>
    </>
  );
};

export default Header;
