import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr 100px;
  place-items: center center;
`;

const Homepage = () => {
  return (
    <Layout>
      <Header />
      <h1>Main</h1>
      <Footer />
    </Layout>
  );
};

export default Homepage;
