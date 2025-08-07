import logo from './logo.svg';
import './App.css';
import TodoInsert from './pages/TodoInsert';
import TodoList from './pages/TodoList';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Link to={'/insert'}>
          <h1>INSERT</h1>
        </Link>
        <br />
        <Link to={'/list'}>
          <h1>LIST</h1>
        </Link>
        <br />
        <Link to={''}>
          <h1>HOME</h1>
        </Link>
        <Routes>
          <Route path="insert" element={<TodoInsert />} />
          <Route path="list" element={<TodoList />} />
          <Route path="" element={<h1>ㄲㄹㄲㄹ</h1>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
