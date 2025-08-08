import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  background-color: #ff9900;
  display: grid;
  grid-template-rows: 150px 100px;
  grid-template-columns: 1fr;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bolder;
  font-size: xx-large;
  & > a {
    text-decoration: none;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  font-size: 40px;
`;
const Header = () => {
  return (
    <LayoutDiv>
      <Div>
        <div>LOGO</div>
        <div>TITLE</div>
        <div>USER INFO</div>
      </Div>
      <Nav>
        <Link to={'/board/list'}>BOARD</Link>
        <Link to={'/notice/list'}>NOTICE</Link>
        <Link to={'/gallery/list'}>GALLERY</Link>
      </Nav>
    </LayoutDiv>
  );
};

export default Header;
