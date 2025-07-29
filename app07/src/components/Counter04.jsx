import React, { useState } from 'react';

const Counter04 = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <h2>Count04</h2>
      <h3>숫자 : {value}</h3>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Plus
      </button>
    </>
  );
};

export default Counter04;
