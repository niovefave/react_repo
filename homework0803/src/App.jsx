import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const AppWrap = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  font-family: 'Segoe UI', sans-serif;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  padding: 20px 0;
  margin: 0;
  background: #92b5ff;
  color: #fff;
  letter-spacing: 1px;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWrap>
          <Header>HOMEWORK</Header>
          <Home />
        </AppWrap>
      </BrowserRouter>
    </>
  );
}

export default App;
