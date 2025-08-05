import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import BoardList from './components/board/BoardList';
import BoardInsert from './components/board/BoardInsert';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={'board/list'}>BOARD LIST</Link>
          <Link to={'board/insert'}>BOARD INSERT</Link>
        </nav>
        <Routes>
          <Route path="/board/insert" element={<BoardInsert />}></Route>
          <Route path="/board/list" element={<BoardList />}></Route>
          <Route path="*" element={<h1>zzz</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
