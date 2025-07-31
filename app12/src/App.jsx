import './App.css';
import Counter from './components/Counter';
import Hello from './components/Hello';
import { MyContext, MyContextProvider } from './context/CountContext';

function App() {
  return (
    <>
      <MyContextProvider>
        <Hello />
        <Counter />
      </MyContextProvider>
    </>
  );
}

export default App;
