import { useContext } from 'react';
import {
  NumContext,
  StrContext,
  useNumContext,
  useStrContext,
} from '../context/MyContext';

const Hello = () => {
  console.log('헬로');

  const [str, setStr] = useStrContext();
  const { num, plus, minus } = useNumContext();

  return (
    <>
      <h2>Hello</h2>
      <h3>str : {str}</h3>
      <h3>num : {num}</h3>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
    </>
  );
};

export default Hello;
