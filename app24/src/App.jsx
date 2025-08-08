import { useState } from 'react';
import './App.css';
import AwesomeBtn from './components/AwesomeBtn';
import MainLayout from './layouts/MainLayout';

function App() {
  const [result, setResult] = useState('');

  function setTeto() {
    setResult('당신은 테토');
  }
  function setEgen() {
    setResult('당신은 에겐');
  }

  return (
    <MainLayout>
      <div>
        <h1>친구들과 만날 때 나는?</h1>
        <AwesomeBtn str="그렇다" f={setTeto} />
        <AwesomeBtn str="아니다" f={setEgen} />
      </div>
      <h1>{result}</h1>
    </MainLayout>
  );
}

export default App;
