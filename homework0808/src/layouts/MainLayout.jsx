import { Route, Routes } from 'react-router-dom';
import BoardInsert from '../pages/board/BoardInsert';
import BoardList from '../pages/board/BoardList';
import { styled } from '@mui/material';
import Header from '../components/common/Header';
import Aside from '../components/common/Aside';
import Footer from '../components/common/Footer';
import BoardDetail from '../pages/board/BoardDetail';

const LayoutDiv = styled('div')`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-auto-rows: 150px 1fr 100px;
  grid-template-columns: 1fr;
  place-items: center center;
  background: #f8f9fa;
`;

const MainDiv = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 1fr 100px;
  place-items: center center;
  background: white;
  margin: 0 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const MainLayout = () => {
  return (
    <LayoutDiv>
      <Header />
      <MainDiv>
        <Aside />
        <Routes>
          <Route path="board/insert" element={<BoardInsert />} />
          <Route path="board/list" element={<BoardList />} />
          <Route path="board/detail/:id" element={<BoardDetail />} />
        </Routes>
      </MainDiv>
      <Footer />
    </LayoutDiv>
  );
};

export default MainLayout;
