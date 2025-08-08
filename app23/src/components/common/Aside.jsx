import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1px black;
  & > a {
    color: #ffffffdc;
    text-decoration: none;
    font-size: 1.7em;
    font-weight: 700;
    padding-top: 50px;
    &:hover {
      color: #ffffff;
      font-size: 1.8em;
    }
  }
`;

const Aside = () => {
  return (
    <StyledAside>
      <Link to={'/board/list'}>BOARD</Link>
      <Link to={'/board/insert'}>BOARD</Link>
      <Link to={'/notice/list'}>NOTICE</Link>
      <Link to={'/notice/insert'}>NOTICE</Link>
      <Link to={'/gallery/list'}>GALLERY</Link>
      <Link to={'/gallery/insert'}>GALLERY</Link>
    </StyledAside>
  );
};

export default Aside;
