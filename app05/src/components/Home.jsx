import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  display: grid;
  grid-template-rows: 150px 1fr 100px;
  grid-template-columns: 1fr;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Layout>
      <Header />
      <MainDiv>
        <h1>Main</h1>
      </MainDiv>
      <Footer />
    </Layout>
  );
};

export default Home;
