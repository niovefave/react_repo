import './App.css';
import Counter from './components/Counter';

// useMemo : 값저장 / const result = useMemo(함수 , 의존성 배열)
// useCallbakc : 함수저장 / const result = useCallback(함수 , 의존성 배열)
// useRef : 랜더링과 무관하게 무언가를 저장하고싶을때(값 유지) , RealDom 다루고 싶을때 / const x = useRef();
//React.memo : 자식요소를 부모요소의 props가 변동사항이 있을때만 랜더되게 하는거
function App() {
  return (
    <>
      <h1>React App20</h1>
      <Counter />
    </>
  );
}

export default App;
