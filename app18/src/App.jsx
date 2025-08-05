import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BoardListPage from './pages/board/BoardListPage';
import BoardInsertPage from './pages/board/BoardInsertPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>React App18</h1>
        <Routes>
          <Route path="/board">
            <Route path="list" element={<BoardListPage />} />
            <Route path="insert" element={<BoardInsertPage />} />
          </Route>
          <Route path="/notice/list" element={<h1>NOTICE</h1>} />
          <Route path="/gallery/list" element={<h1>GALLERY</h1>} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
