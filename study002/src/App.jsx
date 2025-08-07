import { Provider } from 'react-redux';
import './App.css';
import CountePage from './pages/counter/CountePage';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import BoardInsert from './pages/board/BoardInsert';
import BoardList from './pages/board/BoardList';
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<CountePage />} />
            <Route path="/board/insert" element={<BoardInsert />} />
            <Route path="/board/list" element={<BoardList />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
