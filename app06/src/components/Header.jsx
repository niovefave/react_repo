import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 8fr 2fr;
  grid-template-columns: 2fr 7fr 1.5fr;
  place-items: center center;
`;

const Nav = styled.div`
  background-color: #4193ff;
  color: aliceblue;
  width: 100%;
  height: 100%;
  grid-column: span 3;
  place-items: center center;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 20px;
`;

const Header = () => {
  return (
    <Layout>
      <h3>LOGO</h3>
      <h1>WELCOME TO KH</h1>
      <h3>USER INFO</h3>
      <Nav>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </Nav>
    </Layout>
  );
};

export default Header;
