import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import BoardInsert from './componentes/board/BoardInsert';
import BoardList from './componentes/board/BoardList';
import NoticeInsert from './componentes/notice/NoticeInsert';
import NoticeList from './componentes/notice/NoticeList';
import GalleryInsert from './componentes/gallery/GalleryInsert';
import GalleryList from './componentes/gallery/GalleryList';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainLayout />}>
            <Route path="board/insert" element={<BoardInsert />} />
            <Route path="board/list" element={<BoardList />} />
            <Route path="notice/insert" element={<NoticeInsert />} />
            <Route path="notice/list" element={<NoticeList />} />
            <Route path="gallery/insert" element={<GalleryInsert />} />
            <Route path="gallery/list" element={<GalleryList />} />
            <Route path="*" element={<h1>HOMEPAGE</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
