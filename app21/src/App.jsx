import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="main/*" element={<MainLayout />}></Route>
          <Route path="admin/*" element={<h1>ADMIN LAYOUT</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
