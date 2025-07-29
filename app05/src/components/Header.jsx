import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  color: beige;
  display: grid;
  grid-template-rows: 8fr 2fr;
  grid-template-columns: 2fr 7fr 1.5fr;

  place-items: center center;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  grid-column: span 3;
  background-color: darkgray;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 20px;
  font-weight: 500;
  & > a {
    text-decoration: none;
    color: aliceblue;
  }
  & > span {
    text-decoration: none;
    color: aliceblue;
  }
`;

const Header = () => {
  return (
    <Layout>
      <div>LOGO</div>
      <h1>WELCOME TO KH</h1>
      <div>USER INFO</div>
      <Nav>
        <span href="#">게시판</span>
        <span href="#">갤러리</span>
        <span href="#">장바구니</span>
        <span href="#">홈</span>
      </Nav>
    </Layout>
  );
};

export default Header;
