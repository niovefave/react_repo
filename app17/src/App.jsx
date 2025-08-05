import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardList from './pages/BoardList';
import NoticeList from './pages/NoticeList';
import GalleryList from './pages/GalleryList';
import Home from './pages/Home';
import Boardinsert from './pages/Boardinsert';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/board/list" element={<BoardList />}></Route>
            <Route path="/board/insert" element={<Boardinsert />}></Route>
            <Route path="/notice/list" element={<NoticeList />}></Route>
            <Route path="/gallery/list" element={<GalleryList />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
