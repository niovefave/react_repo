import './App.css';
import Counter from './components/Counter';
import { MyContextProvider } from './context/MyContext';

function App() {
  return (
    <>
      <h1>React App13</h1>
      <MyContextProvider>
        <Counter />
      </MyContextProvider>
    </>
  );
}

export default App;
