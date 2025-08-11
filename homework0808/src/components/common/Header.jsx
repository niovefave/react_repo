import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledDiv = styled('div')`
  width: 100vw;
  height: 150px;
  background: white;
  border-bottom: 2px solid #2196f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    color: #333;
    margin: 0;
    font-size: 2em;
    font-weight: 600;
  }

  & > a {
    text-decoration: none;
    color: #2196f3;
  }
`;

const StyledNav = styled('nav')`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;

  & > a {
    text-decoration: none;
    color: #2196f3;
    padding: 10px 20px;
    border: 1px solid #2196f3;
    border-radius: 5px;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      background: #2196f3;
      color: white;
    }
  }
`;

const Header = () => {
  return (
    <StyledDiv>
      <Link to={'/'}>
        <h1>머리머리머리머림러리릴머리</h1>
      </Link>

      <StyledNav>
        <Link to={'/board/insert'}>게시글 작성</Link>
        <Link to={'/board/list'}>게시글 조회</Link>
      </StyledNav>
    </StyledDiv>
  );
};

export default Header;
