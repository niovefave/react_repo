import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import BoardList from './components/board/BoardList';
import BoardInsert from './components/board/BoardInsert';

function App() {
  return (
    <>
      {/* <BoardList /> */}
      <BoardInsert />
    </>
  );
}

export default App;
