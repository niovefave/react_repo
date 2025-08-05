import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Header = () => {
  const MyHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin: 25px 0;
  `;
  const MyNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin: 25px 0;
    & > a {
      text-decoration: none;
      color: #a77edd;
    }
  `;

  return (
    <>
      <MyHeader>
        <div>로고</div>
        <div>제목</div>
        <div>로그인 인포</div>
      </MyHeader>
      <MyNav>
        <Link to={'/board/list'}>board list</Link>
        <Link to={'/notice/list'}>notice list</Link>
        <Link to={'/gallery/list'}>gallery list</Link>
      </MyNav>
    </>
  );
};

export default Header;
