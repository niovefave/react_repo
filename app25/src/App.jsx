import logo from './logo.svg';
import './App.css';
import MyBtn from './components/MyBtn';
import MyTypho from './styles/MyTypho';
import MyGreenTextBtn from './components/MyGreenTextBtn';
import MyFlexDiv from './styles/MyFlexDiv';
import MyGridDiv from './styles/MyGridDiv';

function App() {
  return (
    <>
      <h1>home</h1>
      {/* <MyBtn>
        <MyTypho>1111111111</MyTypho>
      </MyBtn>
      <hr />
      <MyGreenTextBtn>rrr</MyGreenTextBtn> */}
      {/* <MyFlexDiv>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </MyFlexDiv> */}
      <MyGridDiv r={2} c={4}>
        <h1>테스트01</h1>
        <h1>테스트02</h1>
        <h1>테스트03</h1>
        <h1>테스트04</h1>
        <h1>테스트05</h1>
        <h1>테스트06</h1>
        <h1>테스트07</h1>
        <h1>테스트08</h1>
      </MyGridDiv>
    </>
  );
}

export default App;
