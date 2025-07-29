import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>인원수 : {count}명</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default Counter;
