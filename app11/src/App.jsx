import './App.css';
import Hello from './components/Hello';
import { NumContextProvider, StrContextProvider } from './context/MyContext';
import World from './components/World';
function App() {
  return (
    <>
      <h1>React App11</h1>
      <NumContextProvider>
        <StrContextProvider>
          <World />
        </StrContextProvider>
      </NumContextProvider>
    </>
  );
}

export default App;
