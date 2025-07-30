import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>React app10</h1>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
