import React, { useContext } from 'react';
import Hello from './Hello';

const World = () => {
  console.log('world');

  return (
    <>
      <h2>World</h2>
      <Hello />
    </>
  );
};

export default World;
