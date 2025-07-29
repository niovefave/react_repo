import React, { useState } from 'react';

const Counter02 = () => {
  const [count, setCount] = useState(20);

  return (
    <>
      <h1>Counter02</h1>
      <h3>방문자 수 : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        플러스
      </button>
    </>
  );
};

export default Counter02;
