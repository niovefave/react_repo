import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 1fr;
  border-bottom: solid 1px black;
  font-size: 2em;
  font-weight: 700;
  align-items: center;
  color: #ffffffdc;
  & > a {
    text-decoration: none;
    color: #ffffffdc;
    &:hover {
      color: white;
      font-size: 2em;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to={'*'}>
        <div>REACT APP23</div>
      </Link>
      <div>USER_INFO</div>
    </StyledHeader>
  );
};

export default Header;
