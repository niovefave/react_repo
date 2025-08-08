import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import MainLayout from './layouts/MainLayout';

function App() {
  const question = [
    {
      title: '친구들을 만났을때 나는?',
      option: ['시끌벅적', '조용함'],
    },
    {
      title: '새로운 일을 시작할때 나는?',
      option: ['눈에 보이는것부터 해결', '어떤 순서로 해결할지 계획'],
    },
    {
      title: '스트레스를 해소할때 나는?',
      option: ['친구들과 맥주한잔', '혼자 산책하며 생각정리'],
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [tetoScore, setTetoScore] = useState(0);
  const [result, setResult] = useState('');

  function selectTeto() {
    const score = tetoScore + 1;
    setTetoScore(score);
    nextQuestion(score);
  }

  function selectEgen() {
    nextQuestion(tetoScore);
  }
  function nextQuestion(currentTetoScore) {
    if (currentIdx === question.length - 1) {
      if (currentTetoScore >= 2) {
        setResult('당신은 테토');
      } else setResult('당신은 에겐');
    } else setCurrentIdx(currentIdx + 1);
  }

  if (result) {
    return (
      <MainLayout>
        <h1>{result}</h1>;
      </MainLayout>
    );
  }

  const currentQuestion = question[currentIdx];

  return (
    <MainLayout>
      <div>
        <h1>{currentQuestion.title}</h1>
        <Button str={currentQuestion.option[0]} f={selectTeto} />
        <Button str={currentQuestion.option[1]} f={selectEgen} />
      </div>
    </MainLayout>
  );
}

export default App;
