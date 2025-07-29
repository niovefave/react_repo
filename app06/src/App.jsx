import './App.css';
import Card from './components/Card';
import MyBtn from './components/MyBtn';
import BoardInsertPage from './pages/board/BoardInsertPage';
import Homepage from './pages/Homepage';

function App() {
  const arr = ['하나', '둘', '셋'];

  return (
    <>
      {arr.map((elem, idx) => {
        return <MyBtn x={elem} />;
      })}
    </>
  );
}

export default App;
