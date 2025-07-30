import React, { useState } from 'react';

const Counter05 = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>수수수숫수수</h1>
      <h3>올려있 : {num}</h3>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        버버버버버
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        트트트트튼
      </button>
      <button
        onClick={() => {
          setNum(num * 0);
        }}
      >
        도망챠
      </button>
    </>
  );
};

export default Counter05;
