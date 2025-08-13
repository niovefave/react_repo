import BoardInsertPage from './pages/board/BoardInsertPage';
import BoardListPage from './pages/board/BoardListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="board">
            <Route index element={<h1>BOARD_HOME</h1>} />
            <Route path="insert" element={<BoardInsertPage />} />
            <Route path="list" element={<BoardListPage />} />
          </Route>
          <Route path="/" element={<h1>React App29</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
