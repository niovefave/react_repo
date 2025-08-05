import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DivTag = styled.div`
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

const Header = () => {
  return (
    <>
      <DivTag>
        <Link to={'/board/list'}>BOARD</Link>
        <Link to={'/notice/list'}>NOTICE</Link>
        <Link to={'/gallery/list'}>GALLERY</Link>
      </DivTag>
    </>
  );
};

export default Header;
