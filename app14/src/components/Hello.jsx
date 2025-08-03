import React, { useEffect, useState } from 'react';

const Hello = () => {
  console.log('Hello');

  const [num, setNum] = useState(0);

  function f01() {
    const x = setInterval(() => {
      console.log(3000);
    }, 3000);
    return () => {
      clearInterval(x);
    };
  }

  useEffect(f01, [num]);

  return (
    <>
      <h1>Hello</h1>
      <h2>NUM : {num}</h2>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default Hello;
