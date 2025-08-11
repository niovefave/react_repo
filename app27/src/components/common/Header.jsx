import React from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledDiv = styled('div')`
  width: 100vw;
  height: 150px;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled('nav')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  font-size: 1.5em;
  & > a {
    text-decoration: none;
    font-weight: 700;
    color: orange;
    &:hover {
      color: #ffb327cf;
    }
  }
`;

const Header = () => {
  return (
    <StyledDiv>
      <h1>Rreact App27 / 도서 관리 프로그램</h1>
      <StyledNav>
        <Link to={'/book/insert'}>비둘기야</Link>
        <Link to={'/book/list'}>밥먹자</Link>
        <Link to={'/auth/member/mypage'}>999999</Link>
      </StyledNav>
    </StyledDiv>
  );
};

export default Header;
