import './App.css';
import MainLayout from './layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
