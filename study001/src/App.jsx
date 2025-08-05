import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BoardInsert from './pages/board/BoardInsert';
import BoardList from './pages/board/BoardList';

function App() {
  return (
    <>
      <h1>Study001</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/board">
            <Route path="insert" element={<BoardInsert />} />
            <Route path="list" element={<BoardList />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
