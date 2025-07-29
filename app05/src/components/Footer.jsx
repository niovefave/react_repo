import styled from 'styled-components';

const Layout = styled.div`
  background-color: #2f2f2f;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Layout>
      <span>Tel. 010-1234-1234</span>
      <span>e-mail. exmple@exmple.com</span>
      <span>서울 관악구 행복동</span>
    </Layout>
  );
};

export default Footer;
