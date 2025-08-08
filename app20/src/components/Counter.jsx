import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Hellp from './Hellp';

const Counter = () => {
  console.log('Counter render');
  const [cnt, setCnt] = useState(0);

  function calc() {
    console.log('calc');

    let sum = 0;
    for (let i = 1; i <= 100; ++i) {
      sum += i;
    }
    return sum;
  }
  const f = useCallback(calc, []);
  const result = useMemo(calc, []);
  console.log('result : ', result);

  function plusFive() {
    setCnt((prev) => prev + 1);
    setCnt((prev) => prev + 1);
    setCnt((prev) => prev + 1);
    setCnt((prev) => prev + 1);
    setCnt((prev) => prev + 1);
  }

  const x = useRef();
  console.log(x.current);
  useEffect(() => x.current.focus(), []);
  return (
    <>
      <h2>Counter</h2>
      <h3>CNT : {cnt}</h3>
      <button onClick={plusFive}>PLUS</button>
      <br />
      <input type="text" ref={x} />
      <hr />
      <Hellp f={f} />
    </>
  );
};

export default Counter;
