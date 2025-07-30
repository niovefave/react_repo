import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>HOMEWORK</h1>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
